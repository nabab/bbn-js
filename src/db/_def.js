/**
 * Created by BBN on 28/01/2022.
 * 
 * This is an ORM for IndexedDB.
 * @example
 * ```javascript
 * 
 * bbn.db.add("appui", "options", structure); // Samme structure as in bbn-php
 * this.db = null;
 * bbn.db.open('appui').then(function(db){
 *   this.db = db;
 *   db.insert(tableName, data).then(numberInsertedRows => {
 *     if (numberInsertedRows) {
 *       appui.success();
 *     }
 *   });
 *   db.selectOne(tableName, fieldName, {primaryName: primaryValue}).then(function(result) => {
 *     bbn.fn.log("The result is " + result);
 *   });
 *   db.selectOne(tableName, fieldName, {primaryName: primaryValue}).then(function(result) => {
 *     bbn.fn.log("The result is " + result);
 *   });
 * });
 * ```
 */
;(function(){
  "use strict";

  const idb      = indexedDB || webkitIndexedDB || mozIndexedDB || OIndexedDB || msIndexedDB;
  const dbObject = function(dbName) {
    const conn      = bbn.db._connections[dbName];
    const structure = bbn.db._structures[dbName];

    this.insert = (table, data) => {
      if (!bbn.fn.isArray(data)) {
        data = [data];
      }

      return new Promise(resolve => {
        const tx    = conn.transaction(table, "readwrite");
        const store = tx.objectStore(table);
        let res     = data.length;

        bbn.fn.each(data, a => {
          const request = store.put(a);
          request.onerror = () => {
            bbn.fn.log(request.error);
            res--;
          }
        });

        tx.onabort = () => {
          throw new Error(tx.error);
        };
        tx.oncomplete = () => {
          resolve(res);
        }
      });
    };

    this.update = (table, what, where) => {
      return new Promise(resolve => {
        const tx    = conn.transaction(table, "readwrite");
        const store = tx.objectStore(table);
      
      });
    };
    this.delete = (table, where) => {
      return new Promise(resolve => {
        const tx    = conn.transaction(table, "readwrite");
        const store = tx.objectStore(table);
      });
    };

    this.selectOne = (table, field, where, order, start, limit) => {
      return new Promise(resolve => {
        this.select(table, [field], where, order, start, limit).then(d => {
          resolve(d[field] ?? undefined);
        });
      });
    };

    this.select = (table, fields, where, order, start, limit) =>  {
      const tx      = conn.transaction(table, "readonly");
      const store   = tx.objectStore(table);
      const arch    = structure[table];
      const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
      if (!where[primary]) {
        throw new Error(bbn._("No "))
      }
 
      return new Promise(resolve => {
        const req = store.get(where[primary]);
        req.onsuccess = () => {
          let obj = req.result;
          if (fields.length) {
            let res = {};
            bbn.fn.iterate(obj, (v, n) => {
              if (fields.indexOf(n) > -1) {
                res[n] = v;
              }
            });
            return resolve(res)
          }
          else {
            resolve(obj);
          }
        };
      });
    };
    this.selectAll = (table, fields, where, order, start, limit) => {
      const tx      = conn.transaction(table, "read");
      const store   = tx.objectStore(table);
      const arch    = structure[table];
      const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
      if (!where[primary]) {
        throw new Error(bbn._("No "))
      }
      return new Promise(resolve => {
        const req     = store.get(structure.keys.PRIMARY);
      
      });
    };
    this.getColumnValues = (table, field, where, order, start, limit) => {
      return new Promise(resolve => {
        const tx    = conn.transaction(table, "read");
        const store = tx.objectStore(table);
      
      });
    };

    return this;
  };


  bbn.db = {
    _structures: {},
    /* This variable should be set to true in debugging mode only */
    _connections: {},
    /* Address of the CDN (where this file should be hosted) */
    _stores: {},
    ok: idb !== undefined,
    open(name) {
      return new Promise((resolve) => {
        if (!bbn.db._connections[name]) {
          if (!bbn.db._structures[name]) {
            throw new Error(bbn._("Impossible to find a structure for the database %s", name));
          }

          const conn = idb.open(name);
          conn.onupgradeneeded = () => {
            bbn.fn.log("UPGRADE NEEDED");
            const db = conn.result;
            bbn.fn.iterate(bbn.db._structures[name], (structure, storeName) => {
              const primary = structure.keys.PRIMARY.columns.length > 1 ? structure.keys.PRIMARY.columns : structure.keys.PRIMARY.columns[0];
              const store = db.createObjectStore(storeName, {keyPath: primary});
              bbn.fn.iterate(structure.keys, (a, n) => {
                if (n !== 'PRIMARY') {
                  store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], {
                    unique: !!a.unique
                  });
                }
              });
            })
          };
          conn.onsuccess = () => {
            bbn.db._connections[name] = conn.result;
            let obj = new dbObject(name);
            bbn.fn.log("CREATION", obj, conn.result);
            resolve(obj);
          };
          return;
        }

        resolve(new dbObject(bbn.db._connections[name]));
      });
    },
    add(db, name, structure) {
      if (structure && structure.keys && structure.keys.PRIMARY && structure.fields) {
        if (!bbn.db._structures[db]) {
          bbn.db._structures[db] = {};
        }

        bbn.db._structures[db][name] = structure;
      }
      else {
        throw new Error(bbn._("The database structure for %s is not valid (are there keys and field? Is there a primary?", name));
      }
    }
  };

})();