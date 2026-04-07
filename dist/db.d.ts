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
    update(table: string, data: Record<string, unknown>, where: WhereObject, replace?: boolean): Promise<number>;
    delete(table: string, where: Record<string, unknown>): Promise<number>;
    selectOne(table: string, field: string, where?: unknown, order?: OrderClause, start?: number, limit?: number): Promise<unknown>;
    select(table: string, fields?: string[], where?: unknown, order?: OrderClause, start?: number): Promise<Record<string, unknown> | null>;
    selectAll(table: string, fields?: string[], where?: unknown, order?: OrderClause, start?: number, limit?: number | null): Promise<Record<string, unknown>[]>;
    getColumnValues(table: string, field: string, where?: unknown, order?: OrderClause, start?: number, limit?: number | null): Promise<unknown[]>;
    copyTable(target: string, table: string, fields?: string[], where?: unknown, order?: OrderClause, start?: number, limit?: number | null): Promise<number>;
    deleteTable(table: string): Promise<boolean>;
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
declare const db: DbManager;
export default db;
