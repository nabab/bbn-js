var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import _ from './_.js';
import iterate from './fn/loop/iterate.js';
import log from './fn/browser/log.js';
import isObject from './fn/type/isObject.js';
import isArray from './fn/type/isArray.js';
import extend from './fn/object/extend.js';
const idb = window.indexedDB ||
    window.webkitIndexedDB ||
    window.mozIndexedDB ||
    window.OIndexedDB ||
    window.msIndexedDB;
const transformResult = (obj, fields) => {
    if (!obj) {
        return undefined;
    }
    if (fields === null || fields === void 0 ? void 0 : fields.length) {
        const res = {};
        iterate(obj, (v, n) => {
            if (fields.includes(n)) {
                res[n] = v;
            }
        });
        return res;
    }
    return obj;
};
const fieldsFromFilter = (filter, fields = []) => {
    var _a;
    if ((_a = filter === null || filter === void 0 ? void 0 : filter.conditions) === null || _a === void 0 ? void 0 : _a.length) {
        filter.conditions.forEach((cond) => {
            if (cond.field && !fields.includes(cond.field)) {
                fields.push(cond.field);
            }
            else if (cond.conditions) {
                fieldsFromFilter(cond, fields);
            }
        });
    }
    else if (isObject(filter)) {
        iterate(filter, (_v, n) => {
            if (!fields.includes(n)) {
                fields.push(n);
            }
        });
    }
    else if (isArray(filter)) {
        filter.forEach((cond) => {
            if (cond.field && !fields.includes(cond.field)) {
                fields.push(cond.field);
            }
            else if (cond.conditions) {
                fieldsFromFilter(cond, fields);
            }
        });
    }
    return fields;
};
const getPrimaryKey = (structure) => {
    const cols = structure.keys.PRIMARY.columns;
    return cols.length > 1 ? cols : cols[0];
};
const requestToPromise = (req) => new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
});
const transactionDone = (tx) => new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onabort = () => reject(tx.error);
    tx.onerror = () => reject(tx.error);
});
class DbObject {
    constructor(dbName) {
        this.lastErr = null;
        this.dbName = dbName;
    }
    get connection() {
        const conn = db._connections[this.dbName];
        if (!conn) {
            throw new Error(_('The database %s is not open', this.dbName));
        }
        return conn;
    }
    get structure() {
        const structure = db._structures[this.dbName];
        if (!structure) {
            throw new Error(_('No structure defined for database %s', this.dbName));
        }
        return structure;
    }
    getStore(table, mode) {
        const tx = this.connection.transaction([table], mode);
        tx.onabort = () => {
            this.lastErr = tx.error;
            log(tx.error);
        };
        tx.onerror = () => {
            this.lastErr = tx.error;
            log(tx.error);
        };
        return [tx, tx.objectStore(table)];
    }
    lastError() {
        return this.lastErr;
    }
    insert(table, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rows = Array.isArray(data) ? data : [data];
            if (!rows.length) {
                return 0;
            }
            const [tx, store] = this.getStore(table, 'readwrite');
            let inserted = 0;
            for (const row of rows) {
                const req = store.put(row);
                req.onsuccess = () => {
                    inserted++;
                };
                req.onerror = () => {
                    this.lastErr = req.error;
                    log(req.error);
                };
            }
            yield transactionDone(tx);
            return inserted;
        });
    }
    update(table_1, data_1, where_1) {
        return __awaiter(this, arguments, void 0, function* (table, data, where, replace = false) {
            const rows = yield this.selectAll(table, [], where);
            if (!rows.length) {
                return 0;
            }
            const structure = this.structure[table];
            const primary = getPrimaryKey(structure);
            if (Array.isArray(primary)) {
                throw new Error(_('Composite primary keys are not supported by this update implementation'));
            }
            const [tx, store] = this.getStore(table, 'readwrite');
            let updated = 0;
            for (const row of rows) {
                const nextRow = extend({}, replace ? { [primary]: row[primary] } : row, data);
                if (!(primary in nextRow)) {
                    throw new Error(_('No primary key in the data'));
                }
                const req = store.put(nextRow);
                req.onsuccess = () => {
                    updated++;
                };
                req.onerror = () => {
                    this.lastErr = req.error;
                    log(req.error);
                };
            }
            yield transactionDone(tx);
            return updated;
        });
    }
    delete(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            const structure = this.structure[table];
            const primary = getPrimaryKey(structure);
            if (Array.isArray(primary)) {
                throw new Error(_('Composite primary keys are not supported by this delete implementation'));
            }
            if (!(primary in where)) {
                throw new Error(_('No primary key in the filter'));
            }
            const [tx, store] = this.getStore(table, 'readwrite');
            store.delete(where[primary]);
            yield transactionDone(tx);
            return 1;
        });
    }
    selectOne(table_1, field_1) {
        return __awaiter(this, arguments, void 0, function* (table, field, where = null, order = null, start = 0, limit = 1) {
            var _a;
            const rows = yield this.selectAll(table, [field], where, order, start, limit);
            return (_a = rows === null || rows === void 0 ? void 0 : rows[0]) === null || _a === void 0 ? void 0 : _a[field];
        });
    }
    select(table_1) {
        return __awaiter(this, arguments, void 0, function* (table, fields = [], where = null, order = null, start = 0) {
            const rows = yield this.selectAll(table, fields, where, order, start, 1);
            return rows.length ? rows[0] : null;
        });
    }
    selectAll(table_1) {
        return __awaiter(this, arguments, void 0, function* (table, fields = [], where = null, order = null, start = 0, limit = null) {
            void order;
            const [tx, store] = this.getStore(table, 'readonly');
            const structure = this.structure[table];
            const primary = getPrimaryKey(structure);
            const results = [];
            const searchField = isObject(where)
                ? Object.keys(where)[0]
                : (!where || isArray(where) ? null : primary);
            if (!Array.isArray(primary) && searchField === primary) {
                if (Array.isArray(where === null || where === void 0 ? void 0 : where[primary])) {
                    const ids = where[primary];
                    const max = Math.min(ids.length - start, limit !== null && limit !== void 0 ? limit : ids.length);
                    const slice = ids.slice(start, start + max);
                    for (const id of slice) {
                        const row = yield requestToPromise(store.get(id));
                        const transformed = transformResult(row, fields);
                        if (transformed) {
                            results.push(transformed);
                        }
                    }
                    yield transactionDone(tx);
                    return results;
                }
                const key = isObject(where)
                    ? where[primary]
                    : where;
                const row = yield requestToPromise(store.get(key));
                const transformed = transformResult(row, fields);
                if (transformed) {
                    results.push(transformed);
                }
                yield transactionDone(tx);
                return results;
            }
            yield new Promise((resolve, reject) => {
                const req = store.openCursor();
                let i = 0;
                req.onsuccess = (e) => {
                    var _a, _b;
                    const cursor = e.target.result;
                    if (!cursor) {
                        resolve();
                        return;
                    }
                    const matches = !where || !((_b = (_a = window.bbn) === null || _a === void 0 ? void 0 : _a.fn) === null || _b === void 0 ? void 0 : _b.search)
                        ? true
                        : !window.bbn.fn.search([cursor.value], where);
                    if (matches) {
                        if (i >= start) {
                            const transformed = transformResult(cursor.value, fields);
                            if (transformed) {
                                results.push(transformed);
                            }
                            if (limit !== null && results.length >= limit) {
                                resolve();
                                return;
                            }
                        }
                        i++;
                    }
                    cursor.continue();
                };
                req.onerror = () => {
                    this.lastErr = req.error;
                    log(req.error);
                    reject(req.error);
                };
            });
            yield transactionDone(tx);
            return results;
        });
    }
    getColumnValues(table_1, field_1) {
        return __awaiter(this, arguments, void 0, function* (table, field, where = null, order = null, start = 0, limit = null) {
            const rows = yield this.selectAll(table, fieldsFromFilter(where, [field]), where, order, start, limit);
            return rows
                .map(row => row[field])
                .filter(v => v !== undefined);
        });
    }
    copyTable(target_1, table_1) {
        return __awaiter(this, arguments, void 0, function* (target, table, fields = [], where = null, order = null, start = 0, limit = null) {
            if (!this.connection.objectStoreNames.contains(target)) {
                yield db.add(this.dbName, target, this.structure[table]);
                yield db.open(this.dbName);
            }
            if (!this.connection.objectStoreNames.contains(target)) {
                throw new Error(_('The target table %s does not exist', target));
            }
            const rows = yield this.selectAll(table, fields, where, order, start, limit);
            if (!rows.length) {
                return 0;
            }
            return this.insert(target, rows);
        });
    }
    deleteTable(table) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db.remove(this.dbName, table);
            return true;
        });
    }
}
const db = {
    _structures: {},
    _connections: {},
    _stores: {},
    ok: idb !== undefined,
    updateStructure(storeName, structure, database) {
        const primary = getPrimaryKey(structure);
        if (!database.objectStoreNames.contains(storeName)) {
            const store = database.createObjectStore(storeName, {
                keyPath: primary
            });
            iterate(structure.keys, (a, n) => {
                if (n !== 'PRIMARY') {
                    store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], { unique: !!a.unique });
                }
            });
        }
    },
    getExistingVersion(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const live = this._connections[name];
            if (live) {
                return live.version;
            }
            return new Promise((resolve, reject) => {
                if (!idb) {
                    reject(new Error(_('IndexedDB is not available')));
                    return;
                }
                const req = idb.open(name);
                req.onsuccess = () => {
                    const database = req.result;
                    const version = database.version;
                    database.close();
                    resolve(version);
                };
                req.onupgradeneeded = () => {
                    // Database did not exist before; this open created it temporarily.
                    // Version is therefore effectively 1.
                    const database = req.result;
                    const version = database.version;
                    database.close();
                    resolve(version);
                };
                req.onerror = () => reject(req.error);
            });
        });
    },
    reopenWithUpgrade(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingVersion = yield this.getExistingVersion(name);
            const nextVersion = existingVersion + 1;
            if (this._connections[name]) {
                this._connections[name].close();
                delete this._connections[name];
            }
            return new Promise((resolve, reject) => {
                if (!idb) {
                    reject(new Error(_('IndexedDB is not available')));
                    return;
                }
                const req = idb.open(name, nextVersion);
                req.onupgradeneeded = () => {
                    const database = req.result;
                    const dbStructure = this._structures[name] || {};
                    iterate(dbStructure, (structure, storeName) => {
                        if (!database.objectStoreNames.contains(storeName)) {
                            this.updateStructure(storeName, structure, database);
                        }
                    });
                };
                req.onsuccess = () => {
                    this._connections[name] = req.result;
                    resolve(req.result);
                };
                req.onerror = () => reject(req.error);
                req.onblocked = () => reject(req.error || new Error(_('IndexedDB upgrade blocked')));
            });
        });
    },
    open(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!idb) {
                throw new Error(_('IndexedDB is not available'));
            }
            if (!this._structures[name]) {
                throw new Error(_('Impossible to find a structure for the database %s', name));
            }
            if (this._connections[name]) {
                return new DbObject(name);
            }
            yield new Promise((resolve, reject) => {
                const req = idb.open(name);
                req.onupgradeneeded = () => {
                    const database = req.result;
                    const dbStructure = this._structures[name] || {};
                    iterate(dbStructure, (structure, storeName) => {
                        if (!database.objectStoreNames.contains(storeName)) {
                            this.updateStructure(storeName, structure, database);
                        }
                    });
                };
                req.onsuccess = () => {
                    this._connections[name] = req.result;
                    resolve(req.result);
                };
                req.onerror = () => reject(req.error);
            });
            return new DbObject(name);
        });
    },
    add(database, name, structure) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!((_a = structure === null || structure === void 0 ? void 0 : structure.keys) === null || _a === void 0 ? void 0 : _a.PRIMARY) || !(structure === null || structure === void 0 ? void 0 : structure.fields)) {
                throw new Error(_('The database structure for %s is not valid (missing keys, fields, or primary key)', name));
            }
            if (!this._structures[database]) {
                this._structures[database] = {};
            }
            this._structures[database][name] = structure;
            // Only upgrade if the DB already exists/open and the store is missing
            const conn = this._connections[database];
            if (conn && !conn.objectStoreNames.contains(name)) {
                yield this.reopenWithUpgrade(database);
            }
        });
    },
    remove(database, name) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            (_a = this._structures[database]) === null || _a === void 0 ? true : delete _a[name];
            const conn = this._connections[database];
            if (!conn) {
                return;
            }
            const nextVersion = conn.version + 1;
            conn.close();
            delete this._connections[database];
            yield new Promise((resolve, reject) => {
                if (!idb) {
                    reject(new Error(_('IndexedDB is not available')));
                    return;
                }
                const req = idb.open(database, nextVersion);
                req.onupgradeneeded = () => {
                    const dbInstance = req.result;
                    if (dbInstance.objectStoreNames.contains(name)) {
                        dbInstance.deleteObjectStore(name);
                    }
                };
                req.onsuccess = () => {
                    this._connections[database] = req.result;
                    resolve();
                };
                req.onerror = () => reject(req.error);
            });
        });
    }
};
export default db;
