import { _ } from "./_.js";
import { each } from "./fn/loop/each.js";
import { iterate } from "./fn/loop/iterate.js";
import { log } from "./fn/browser/log.js";
const idb = window['indexedDB'] || window['webkitIndexedDB'] || window['mozIndexedDB'] || window['OIndexedDB'] || window['msIndexedDB'];
const dbObject = function (dbName) {
    const conn = db._connections[dbName];
    const structure = db._structures[dbName];
    this.insert = (table, data) => {
        if (!Array.isArray(data)) {
            data = [data];
        }
        return new Promise(resolve => {
            const tx = conn.transaction(table, "readwrite");
            const store = tx.objectStore(table);
            let res = data.length;
            each(data, a => {
                const request = store.put(a);
                request.onerror = () => {
                    log(request.error);
                    res--;
                };
            });
            tx.onabort = () => {
                throw new Error(tx.error);
            };
            tx.oncomplete = () => {
                resolve(res);
            };
        });
    };
    this.update = (table, data, where) => {
        return new Promise(resolve => {
            const tx = conn.transaction(table, "readwrite");
            const store = tx.objectStore(table);
            const arch = structure[table];
            const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
            if (!where[primary]) {
                throw new Error(_("No "));
            }
            let res = 1;
            const request = store.put(data, where[primary]);
            request.onerror = () => {
                log(request.error);
                res--;
            };
            tx.onabort = () => {
                throw new Error(tx.error);
            };
            tx.oncomplete = () => {
                resolve(res);
            };
        });
    };
    this.delete = (table, where) => {
        return new Promise(resolve => {
            const tx = conn.transaction(table, "readwrite");
            const store = tx.objectStore(table);
            const arch = structure[table];
            const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
            if (!where[primary]) {
                throw new Error(_("No "));
            }
            let res = 1;
            const request = store.delete(where[primary]);
            request.onerror = () => {
                log(request.error);
                res--;
            };
            tx.onabort = () => {
                throw new Error(tx.error);
            };
            tx.oncomplete = () => {
                resolve(res);
            };
        });
    };
    this.selectOne = (table, field, where, order, start, limit) => {
        return new Promise(resolve => {
            this.select(table, [field], where, order, start, limit).then(d => {
                var _a;
                resolve((_a = d[field]) !== null && _a !== void 0 ? _a : undefined);
            });
        });
    };
    this.select = (table, fields, where, order, start, limit) => {
        const tx = conn.transaction(table, "readonly");
        const store = tx.objectStore(table);
        const arch = structure[table];
        const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        if (!where[primary]) {
            throw new Error(_("No "));
        }
        return new Promise(resolve => {
            const req = store.get(where[primary]);
            req.onsuccess = () => {
                let obj = req.result;
                if (fields.length) {
                    let res = {};
                    iterate(obj, (v, n) => {
                        if (fields.indexOf(n) > -1) {
                            res[n] = v;
                        }
                    });
                    return resolve(res);
                }
                else {
                    resolve(obj);
                }
            };
        });
    };
    this.selectAll = (table, fields, where, order, start, limit) => {
        const tx = conn.transaction(table, "read");
        const store = tx.objectStore(table);
        const arch = structure[table];
        const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        if (!where[primary]) {
            throw new Error(_("No "));
        }
        return new Promise(resolve => {
            const req = store.get(structure.keys.PRIMARY);
        });
    };
    this.getColumnValues = (table, field, where, order, start, limit) => {
        return new Promise(resolve => {
            const tx = conn.transaction(table, "read");
            const store = tx.objectStore(table);
        });
    };
};
const db = {
    _structures: {},
    /* This variable should be set to true in debugging mode only */
    _connections: {},
    /* Address of the CDN (where this file should be hosted) */
    _stores: {},
    ok: idb !== undefined,
    open(name) {
        return new Promise((resolve) => {
            if (!db._connections[name]) {
                if (!db._structures[name]) {
                    throw new Error(_("Impossible to find a structure for the database %s", name));
                }
                const conn = idb.open(name);
                conn.onupgradeneeded = () => {
                    log("UPGRADE NEEDED");
                    const res = conn.result;
                    iterate(db._structures[name], (structure, storeName) => {
                        const primary = structure.keys.PRIMARY.columns.length > 1 ? structure.keys.PRIMARY.columns : structure.keys.PRIMARY.columns[0];
                        const store = res.createObjectStore(storeName, { keyPath: primary });
                        iterate(structure.keys, (a, n) => {
                            if (n !== 'PRIMARY') {
                                store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], {
                                    unique: !!a.unique
                                });
                            }
                        });
                    });
                };
                conn.onsuccess = () => {
                    db._connections[name] = conn.result;
                    let obj = new dbObject(name);
                    resolve(obj);
                };
                return;
            }
            resolve(new dbObject(db._connections[name]));
        });
    },
    add(database, name, structure) {
        var _a;
        if (((_a = structure === null || structure === void 0 ? void 0 : structure.keys) === null || _a === void 0 ? void 0 : _a.PRIMARY) && (structure === null || structure === void 0 ? void 0 : structure.fields)) {
            if (!db._structures[database]) {
                db._structures[database] = {};
            }
            db._structures[database][name] = structure;
        }
        else {
            throw new Error(_("The database structure for %s is not valid (are there keys and field? Is there a primary?", name));
        }
    }
};
export { db };
