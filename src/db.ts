import _ from './_.js';
import each from './fn/loop/each.js';
import iterate from './fn/loop/iterate.js';
import log from './fn/browser/log.js';
import isObject from './fn/type/isObject.js';
import isArray from './fn/type/isArray.js';
import extend from './fn/object/extend.js';

type IndexedDbFactory =
  | IDBFactory
  | undefined;

const idb: IndexedDbFactory =
  globalThis.indexedDB ||
  (globalThis as any).webkitIndexedDB ||
  (globalThis as any).mozIndexedDB ||
  (globalThis as any).OIndexedDB ||
  (globalThis as any).msIndexedDB;

type Primitive = string | number | boolean | null | undefined | Date;

interface DbIndexDefinition {
  columns: string[];
  unique?: boolean;
}

interface DbStructure {
  keys: Record<string, DbIndexDefinition>;
  fields: Record<string, Record<string, unknown>>;
  num?: number;
}

interface DbStructures {
  [database: string]: {
    [store: string]: DbStructure;
  };
}

type WhereObject = Record<string, unknown> | null;
type OrderClause = unknown;

interface IDbApi {
  lastError(): unknown;
  insert(table: string, data: Record<string, unknown> | Record<string, unknown>[]): Promise<number>;
  update(
    table: string,
    data: Record<string, unknown>,
    where: WhereObject,
    replace?: boolean
  ): Promise<number>;
  delete(table: string, where: Record<string, unknown>): Promise<number>;
  selectOne(
    table: string,
    field: string,
    where?: unknown,
    order?: OrderClause,
    start?: number,
    limit?: number
  ): Promise<unknown>;
  select(
    table: string,
    fields?: string[],
    where?: unknown,
    order?: OrderClause,
    start?: number
  ): Promise<Record<string, unknown> | null>;
  selectAll(
    table: string,
    fields?: string[],
    where?: unknown,
    order?: OrderClause,
    start?: number,
    limit?: number | null
  ): Promise<Record<string, unknown>[]>;
  getColumnValues(
    table: string,
    field: string,
    where?: unknown,
    order?: OrderClause,
    start?: number,
    limit?: number | null
  ): Promise<unknown[]>;
  copyTable(
    target: string,
    table: string,
    fields?: string[],
    where?: unknown,
    order?: OrderClause,
    start?: number,
    limit?: number | null
  ): Promise<number>;
  deleteTable(table: string): Promise<boolean>;
}

const transformResult = (
  obj: Record<string, unknown> | undefined,
  fields?: string[]
): Record<string, unknown> | undefined => {
  if (!obj) {
    return undefined;
  }

  if (fields?.length) {
    const res: Record<string, unknown> = {};
    iterate(obj, (v: unknown, n: string) => {
      if (fields.includes(n)) {
        res[n] = v;
      }
    });
    return res;
  }

  return obj;
};

const fieldsFromFilter = (filter: unknown, fields: string[] = []): string[] => {
  if ((filter as any)?.conditions?.length) {
    (filter as any).conditions.forEach((cond: any) => {
      if (cond.field && !fields.includes(cond.field)) {
        fields.push(cond.field);
      }
      else if (cond.conditions) {
        fieldsFromFilter(cond, fields);
      }
    });
  }
  else if (isObject(filter)) {
    iterate(filter as Record<string, unknown>, (_v: unknown, n: string) => {
      if (!fields.includes(n)) {
        fields.push(n);
      }
    });
  }
  else if (isArray(filter)) {
    (filter as any[]).forEach((cond: any) => {
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

const getPrimaryKey = (structure: DbStructure): string | string[] => {
  const cols = structure.keys.PRIMARY.columns;
  return cols.length > 1 ? cols : cols[0];
};

const requestToPromise = <T = unknown>(req: IDBRequest<T>): Promise<T> =>
  new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

const transactionDone = (tx: IDBTransaction): Promise<void> =>
  new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onabort = () => reject(tx.error);
    tx.onerror = () => reject(tx.error);
  });

class DbObject implements IDbApi {
  private readonly dbName: string;
  private lastErr: unknown = null;

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  private get connection(): IDBDatabase {
    const conn = db._connections[this.dbName];
    if (!conn) {
      throw new Error(_('The database %s is not open', this.dbName));
    }
    return conn;
  }

  private get structure(): Record<string, DbStructure> {
    const structure = db._structures[this.dbName];
    if (!structure) {
      throw new Error(_('No structure defined for database %s', this.dbName));
    }
    return structure;
  }

  private getStore(table: string, mode: IDBTransactionMode): [IDBTransaction, IDBObjectStore] {
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

  lastError(): unknown {
    return this.lastErr;
  }

  async insert(
    table: string,
    data: Record<string, unknown> | Record<string, unknown>[]
  ): Promise<number> {
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

    await transactionDone(tx);
    return inserted;
  }

  async update(
    table: string,
    data: Record<string, unknown>,
    where: WhereObject,
    replace = false
  ): Promise<number> {
    const rows = await this.selectAll(table, [], where);
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
      const nextRow: any = extend(
        {},
        replace ? { [primary]: row[primary] } : row,
        data
      );

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

    await transactionDone(tx);
    return updated;
  }

  async delete(table: string, where: Record<string, unknown>): Promise<number> {
    const structure = this.structure[table];
    const primary = getPrimaryKey(structure);

    if (Array.isArray(primary)) {
      throw new Error(_('Composite primary keys are not supported by this delete implementation'));
    }

    if (!(primary in where)) {
      throw new Error(_('No primary key in the filter'));
    }

    const [tx, store] = this.getStore(table, 'readwrite');
    store.delete(where[primary] as IDBValidKey);
    await transactionDone(tx);
    return 1;
  }

  async selectOne(
    table: string,
    field: string,
    where: unknown = null,
    order: OrderClause = null,
    start = 0,
    limit = 1
  ): Promise<unknown> {
    const rows = await this.selectAll(table, [field], where, order, start, limit);
    return rows?.[0]?.[field];
  }

  async select(
    table: string,
    fields: string[] = [],
    where: unknown = null,
    order: OrderClause = null,
    start = 0
  ): Promise<Record<string, unknown> | null> {
    const rows = await this.selectAll(table, fields, where, order, start, 1);
    return rows.length ? rows[0] : null;
  }

  async selectAll(
    table: string,
    fields: string[] = [],
    where: unknown = null,
    order: OrderClause = null,
    start = 0,
    limit: number | null = null
  ): Promise<Record<string, unknown>[]> {
    void order;

    const [tx, store] = this.getStore(table, 'readonly');
    const structure = this.structure[table];
    const primary = getPrimaryKey(structure);
    const results: Record<string, unknown>[] = [];

    const searchField = isObject(where)
      ? Object.keys(where as Record<string, unknown>)[0]
      : (!where || isArray(where) ? null : primary);

    if (!Array.isArray(primary) && searchField === primary) {
      if (Array.isArray((where as any)?.[primary])) {
        const ids = (where as any)[primary] as IDBValidKey[];
        const max = Math.min(ids.length - start, limit ?? ids.length);
        const slice = ids.slice(start, start + max);

        for (const id of slice) {
          const row = await requestToPromise<Record<string, unknown> | undefined>(store.get(id));
          const transformed = transformResult(row, fields);
          if (transformed) {
            results.push(transformed);
          }
        }

        await transactionDone(tx);
        return results;
      }

      const key = isObject(where)
        ? (where as Record<string, unknown>)[primary]
        : where;

      const row = await requestToPromise<Record<string, unknown> | undefined>(
        store.get(key as IDBValidKey)
      );

      const transformed = transformResult(row, fields);
      if (transformed) {
        results.push(transformed);
      }

      await transactionDone(tx);
      return results;
    }

    await new Promise<void>((resolve, reject) => {
      const req = store.openCursor();
      let i = 0;

      req.onsuccess = (e: Event) => {
        const cursor = (e.target as IDBRequest<IDBCursorWithValue | null>).result;

        if (!cursor) {
          resolve();
          return;
        }

        const matches = !where || !(globalThis as any).bbn?.fn?.search
          ? true
          : !(globalThis as any).bbn.fn.search([cursor.value], where);

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

    await transactionDone(tx);
    return results;
  }

  async getColumnValues(
    table: string,
    field: string,
    where: unknown = null,
    order: OrderClause = null,
    start = 0,
    limit: number | null = null
  ): Promise<unknown[]> {
    const rows = await this.selectAll(
      table,
      fieldsFromFilter(where, [field]),
      where,
      order,
      start,
      limit
    );

    return rows
      .map(row => row[field])
      .filter(v => v !== undefined);
  }

  async copyTable(
    target: string,
    table: string,
    fields: string[] = [],
    where: unknown = null,
    order: OrderClause = null,
    start = 0,
    limit: number | null = null
  ): Promise<number> {
    if (!this.connection.objectStoreNames.contains(target)) {
      await db.add(this.dbName, target, this.structure[table]);
      await db.open(this.dbName);
    }

    if (!this.connection.objectStoreNames.contains(target)) {
      throw new Error(_('The target table %s does not exist', target));
    }

    const rows = await this.selectAll(table, fields, where, order, start, limit);
    if (!rows.length) {
      return 0;
    }

    return this.insert(target, rows);
  }

  async deleteTable(table: string): Promise<boolean> {
    await db.remove(this.dbName, table);
    return true;
  }
}

interface DbManager {
  _structures: DbStructures;
  _connections: Record<string, IDBDatabase>;
  _stores: Record<string, unknown>;
  ok: boolean;
  open(name: string): Promise<IDbApi>;
  add(database: string, name: string, structure: DbStructure): Promise<void>;
  remove(database: string, name: string): Promise<void>;
  updateStructure(storeName: string, structure: DbStructure, database: IDBDatabase): void;
  reopenWithUpgrade(name: string): Promise<IDBDatabase>;
  getExistingVersion(name: string): Promise<number>;
}

const db: DbManager = {
  _structures: {},
  _connections: {},
  _stores: {},
  ok: idb !== undefined,

  updateStructure(storeName: string, structure: DbStructure, database: IDBDatabase): void {
    const primary = getPrimaryKey(structure);

    if (!database.objectStoreNames.contains(storeName)) {
      const store = database.createObjectStore(storeName, {
        keyPath: primary as string | string[]
      });

      iterate(structure.keys, (a: DbIndexDefinition, n: string) => {
        if (n !== 'PRIMARY') {
          store.createIndex(
            n,
            a.columns.length > 1 ? a.columns : a.columns[0],
            { unique: !!a.unique }
          );
        }
      });
    }
  },

  async getExistingVersion(name: string): Promise<number> {
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
  },

  async reopenWithUpgrade(name: string): Promise<IDBDatabase> {
    const existingVersion = await this.getExistingVersion(name);
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

        iterate(dbStructure, (structure: DbStructure, storeName: string) => {
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
  },

  async open(database: string): Promise<IDbApi> {
    if (!idb) {
      throw new Error(_('IndexedDB is not available'));
    }

    if (!this._structures[database]) {
      throw new Error(_('Impossible to find a structure for the database %s', database));
    }

    if (this._connections[database]) {
      return new DbObject(database);
    }

    await new Promise<IDBDatabase>((resolve, reject) => {
      const req = idb.open(database);

      req.onupgradeneeded = () => {
        const db = req.result;
        const dbStructure = this._structures[database] || {};

        iterate(dbStructure, (structure: DbStructure, storeName: string) => {
          if (!db.objectStoreNames.contains(storeName)) {
            this.updateStructure(storeName, structure, db);
          }
        });
      };

      req.onsuccess = () => {
        this._connections[database] = req.result;
        resolve(req.result);
      };

      req.onerror = () => reject(req.error);
    });

    return new DbObject(database);
  },

  async add(database: string, name: string, structure: DbStructure): Promise<void> {
    if (!structure?.keys?.PRIMARY || !structure?.fields) {
      throw new Error(
        _('The database structure for %s is not valid (missing keys, fields, or primary key)', name)
      );
    }

    if (!this._structures[database]) {
      this._structures[database] = {};
    }

    this._structures[database][name] = structure;

    // Only upgrade if the DB already exists/open and the store is missing
    const conn = this._connections[database];
    if (conn && !conn.objectStoreNames.contains(name)) {
      await this.reopenWithUpgrade(database);
    }
  },

  async remove(database: string, name: string): Promise<void> {
    delete this._structures[database]?.[name];

    const conn = this._connections[database];
    if (!conn) {
      return;
    }

    const nextVersion = conn.version + 1;
    conn.close();
    delete this._connections[database];

    await new Promise<void>((resolve, reject) => {
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
  }
};

export default db;