import _ from './_.js'  ;
import each from './fn/loop/each.js'  ;
import iterate from './fn/loop/iterate.js'  ;
import log from './fn/browser/log.js';
import isObject from './fn/type/isObject.js';
import isArray from './fn/type/isArray.js';
import extend from './fn/object/extend.js';

const idb      = window['indexedDB'] || window['webkitIndexedDB'] || window['mozIndexedDB'] || window['OIndexedDB'] || window['msIndexedDB'];

const transformResult = (obj, fields) => {
  if (fields?.length) {
    let res = {};
    iterate(obj, (v, n) => {
      if (fields.indexOf(n) > -1) {
        res[n] = v;
      }
    });
    return res;
  }
  return obj;
};

const fieldsFromFilter = (filter, fields = []) => {
  if (filter?.conditions?.length) {
    filter.conditions.forEach(cond => {
      if (cond.field && !fields.includes(cond.field)) {
        fields.push(cond.field);
      }
      else if (cond.conditions) {
        fieldsFromFilter(cond, fields);
      }
    });
  }
  else if (isObject(filter)) {
    iterate(filter, (v, n) => {
      if (!fields.includes(n)) {
        fields.push(n);
      }
    });
  }
  else if (isArray(filter)) {
    filter.forEach(cond => {
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

const dbObject = function(dbName) {
  const conn      = db._connections[dbName];
  const structure = db._structures[dbName];
  let lastError = null;

  const onError = (req, resolve) => {
    req.onerror = () => {
      lastError = req.error;
      log(req.error);
      resolve(req.error);
    };
  };

  const getStore = (table, mode) => {
    const tx = conn.transaction([table], mode.toLowerCase().indexOf('r') === 0 ? "readonly" : "readwrite");
    tx.onabort = () => {
      lastError = tx.error;
      throw new Error(tx.error);
    };
    return [tx, tx.objectStore(table)];
  }

  this.lastError = () => lastError;
  this.insert = (table, data) => {
    if (!Array.isArray(data)) {
      data = [data];
    }

    return new Promise(resolve => {
      const [tx, store] = getStore(table, 'w');
      let res     = data.length;

      each(data, a => {
        const request = store.put(a);
        request.onerror = () => {
          log(request.error);
          res--;
        }
      });

      tx.oncomplete = () => {
        resolve(res);
      }
    });
  };

  this.update = (table, data, where, replace) => {
    return new Promise(resolve => {
      this.selectAll(table, [], where).then(rows => {
        if (!rows.length) {
          resolve(0);
          return;
        }

        const [tx, store] = getStore(table, 'w');
        const arch    = structure[table];
        const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        let res = 0;
        for (let i = 0; i < rows.length; i++) {
          const newData = extend({}, replace ? {[primary]: rows[i][primary]} : rows[i], data);
          if (!newData[primary]) {
            throw new Error(_("No primary key in the data"));
          }
          const req = store.put(newData);
          onError(req, resolve);
          req.onsuccess = () => {
            res++;
          };
        }

        tx.oncomplete = () => {
          resolve(res);
        }
      });  
    });
  };

  this.delete = (table, where) => {
    return new Promise(resolve => {
      const [tx, store] = getStore(table, 'w');
      const arch    = structure[table];
      const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
      if (!where[primary]) {
        throw new Error(_("No "))
      }

      let   res     = 1;
      const req = store.delete(where[primary]);

      onError(req, resolve);

      tx.oncomplete = () => {
        resolve(res);
      }
    });
  };

  this.selectOne = (table, field, where, order, start, limit) => {
    return new Promise(resolve => {
      this.selectAll(table, [field], where, order, start, 1).then(d => {
        resolve(d?.[0]?.[field] ?? undefined);
      });
    });
  };

  this.select = (table, fields, where, order, start) =>  {
    return new Promise(resolve => {
      this.selectAll(table, fields, where, order, start, 1).then(d => {
        resolve(d.length ? d[0] : null);
      });
    });
  };
  this.selectAll = (table, fields = [], where = null, order = null, start = 0, limit = null) => {
    return new Promise(resolve => {
      const [tx, store] = getStore(table, 'r');
      const arch    = structure[table];
      const primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
      const search  = isObject(where) ? Object.keys(where)[0] : (!where || isArray(where) ? null : primary);
      const results = [];
      if (search === primary) {
        if (bbn.fn.isArray(where?.[primary])) {
          let req = [];
          const max = Math.min(where[primary].length, limit || 9999999);
          for (let i = start || 0; i < max; i++) {
            let getter = store.get(where[primary][i]);
            getter.onsuccess = () => {
              let obj = getter.result;
              results.push(transformResult(obj, fields))
              if (results.length === max) {
                resolve(results);
              }
            };
            onError(getter, resolve);
            req.push(getter);
          }
        }
        else {
          let req = store.get(where?.[primary] || where);
          req.onsuccess = () => {
            let obj = req.result;
            results.push(transformResult(obj, fields))
            resolve(results);
          };
          onError(req, resolve);
        }
      }
      else {
        const req = store.openCursor();
        let i = 0;
        req.onsuccess = (e) => {
          const cursor = e.target.result;
          if (cursor) {
            if (!where || !bbn.fn.search([cursor.value], where)) {
              if (i >= start) {
                results.push(transformResult(cursor.value, fields));
                if (results.length === limit) {
                  resolve(results);
                }
              }
              i++;
            }
            cursor.continue();
          }
          else {
            resolve(results);
          }
        };
        onError(req, resolve);
      }
    });
  };
  this.getColumnValues = (table, field, where, order, start, limit) => {
    return new Promise(resolve => {
      const tx    = conn.transaction([table], "read");
      const store = tx.objectStore(table);
    
    });
  };
  this.copyTable = (target, table, fields = [], where = null, order = null, start = 0, limit = null) => {
    return new Promise(resolve => {
      if (!conn.objectStoreNames.contains(target)) {
        db.add(dbName, target, structure[table]);
      }
      if (!conn.objectStoreNames.contains(target)) {
        resolve(0);
        throw new Error(_("The target table %s does not exist", target));
      }
      this.selectAll(table, fields, where, order, start, limit).then(d => {
        if (d.length) {
          this.insert(target, d).then(res => {
            resolve(res);
          });
        }
        else {
          resolve(0);
        }
      });
    });
  };
  this.deleteTable = table => {
    return new Promise(resolve => {
      conn.deleteObjectStore(table);
      resolve(true);
    });
  };
};

interface Db {
  _structures: object;
  _connections: object;
  _stores: object;
  ok: boolean;
  open(name: string): Promise<object>;
  add(db: string, name: string, structure: object): void;
}

interface Structure {
  keys: {
    [key: string]: any;
  };
  fields: {
    [key: string]: any;
  };
}

const db = {
  _structures: {},
  /* This variable should be set to true in debugging mode only */
  _connections: {},
  /* Address of the CDN (where this file should be hosted) */
  _stores: {},
  ok: idb !== undefined,
  updateStructure(storeName, structure, req) {
    const primary = structure.keys.PRIMARY.columns.length > 1 ? structure.keys.PRIMARY.columns : structure.keys.PRIMARY.columns[0];
    const stores = req.objectStoreNames;
    if (!stores.contains(storeName)) {
      const store = req.createObjectStore(storeName, {keyPath: primary});
      iterate(structure.keys, (a, n) => {
        if (n !== 'PRIMARY') {
          store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], {
            unique: !!a.unique
          });
        }
      });
    }
    else {
    }
  },
  open(name) {
    return new Promise((resolve) => {
      if (!db._connections[name]) {
        if (!db._structures[name]) {
          throw new Error(_("Impossible to find a structure for the database %s", name));
        }

        let num = Math.max.apply(this, [1].concat(Object.keys(db._structures[name]).map(a => db._structures[name][a].num || 1)));
        const conn = idb.open(name, num);
        conn.onupgradeneeded = () => {
          const req = conn.result;
          iterate(db._structures[name], (structure, storeName) => {
            this.updateStructure(storeName, structure, req);
          });
        };
        conn.onsuccess = () => {
          db._connections[name] = conn.result;
          let obj = new dbObject(name);
          resolve(obj);
        };
      }
      else {
        resolve(new dbObject(name));
      }

    });
  },
  add(database: string, name: string, structure: Structure) {
    if (structure?.keys?.PRIMARY && structure?.fields) {
      if (!db._structures[database]) {
        db._structures[database] = {};
      }

      db._structures[database][name] = structure;
      if (db._connections[database]) {
        this.updateStructure(name, structure, db._connections[database]);
      }
    }
    else {
      throw new Error(_("The database structure for %s is not valid (are there keys and field? Is there a primary?", name));
    }
  }
};

export default db;

