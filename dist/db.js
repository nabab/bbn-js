import _ from './_.js';
import each from './fn/loop/each.js';
import iterate from './fn/loop/iterate.js';
import log from './fn/browser/log.js';
var idb = window['indexedDB'] || window['webkitIndexedDB'] || window['mozIndexedDB'] || window['OIndexedDB'] || window['msIndexedDB'];
var dbObject = function (dbName) {
    var _this = this;
    var conn = db._connections[dbName];
    var structure = db._structures[dbName];
    this.insert = function (table, data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "readwrite");
            var store = tx.objectStore(table);
            var res = data.length;
            each(data, function (a) {
                var request = store.put(a);
                request.onerror = function () {
                    log(request.error);
                    res--;
                };
            });
            tx.onabort = function () {
                throw new Error(tx.error);
            };
            tx.oncomplete = function () {
                resolve(res);
            };
        });
    };
    this.update = function (table, data, where) {
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "readwrite");
            var store = tx.objectStore(table);
            var arch = structure[table];
            var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
            if (!where[primary]) {
                throw new Error(_("No "));
            }
            var res = 1;
            var request = store.put(data, where[primary]);
            request.onerror = function () {
                log(request.error);
                res--;
            };
            tx.onabort = function () {
                throw new Error(tx.error);
            };
            tx.oncomplete = function () {
                resolve(res);
            };
        });
    };
    this.delete = function (table, where) {
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "readwrite");
            var store = tx.objectStore(table);
            var arch = structure[table];
            var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
            if (!where[primary]) {
                throw new Error(_("No "));
            }
            var res = 1;
            var request = store.delete(where[primary]);
            request.onerror = function () {
                log(request.error);
                res--;
            };
            tx.onabort = function () {
                throw new Error(tx.error);
            };
            tx.oncomplete = function () {
                resolve(res);
            };
        });
    };
    this.selectOne = function (table, field, where, order, start, limit) {
        return new Promise(function (resolve) {
            _this.select(table, [field], where, order, start, limit).then(function (d) {
                var _a;
                resolve((_a = d[field]) !== null && _a !== void 0 ? _a : undefined);
            });
        });
    };
    this.select = function (table, fields, where, order, start, limit) {
        var tx = conn.transaction(table, "readonly");
        var store = tx.objectStore(table);
        var arch = structure[table];
        var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        if (!where[primary]) {
            throw new Error(_("No "));
        }
        return new Promise(function (resolve) {
            var req = store.get(where[primary]);
            req.onsuccess = function () {
                var obj = req.result;
                if (fields.length) {
                    var res_1 = {};
                    iterate(obj, function (v, n) {
                        if (fields.indexOf(n) > -1) {
                            res_1[n] = v;
                        }
                    });
                    return resolve(res_1);
                }
                else {
                    resolve(obj);
                }
            };
        });
    };
    this.selectAll = function (table, fields, where, order, start, limit) {
        var tx = conn.transaction(table, "read");
        var store = tx.objectStore(table);
        var arch = structure[table];
        var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        if (!where[primary]) {
            throw new Error(_("No "));
        }
        return new Promise(function (resolve) {
            var req = store.get(structure.keys.PRIMARY);
        });
    };
    this.getColumnValues = function (table, field, where, order, start, limit) {
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "read");
            var store = tx.objectStore(table);
        });
    };
};
var db = {
    _structures: {},
    /* This variable should be set to true in debugging mode only */
    _connections: {},
    /* Address of the CDN (where this file should be hosted) */
    _stores: {},
    ok: idb !== undefined,
    open: function (name) {
        return new Promise(function (resolve) {
            if (!db._connections[name]) {
                if (!db._structures[name]) {
                    throw new Error(_("Impossible to find a structure for the database %s", name));
                }
                var conn_1 = idb.open(name);
                conn_1.onupgradeneeded = function () {
                    log("UPGRADE NEEDED");
                    var res = conn_1.result;
                    iterate(db._structures[name], function (structure, storeName) {
                        var primary = structure.keys.PRIMARY.columns.length > 1 ? structure.keys.PRIMARY.columns : structure.keys.PRIMARY.columns[0];
                        var store = res.createObjectStore(storeName, { keyPath: primary });
                        iterate(structure.keys, function (a, n) {
                            if (n !== 'PRIMARY') {
                                store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], {
                                    unique: !!a.unique
                                });
                            }
                        });
                    });
                };
                conn_1.onsuccess = function () {
                    db._connections[name] = conn_1.result;
                    var obj = new dbObject(name);
                    resolve(obj);
                };
                return;
            }
            resolve(new dbObject(db._connections[name]));
        });
    },
    add: function (database, name, structure) {
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
export default db;
