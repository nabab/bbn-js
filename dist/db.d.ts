interface Db {
    _structures: object;
    _connections: object;
    _stores: object;
    ok: boolean;
    open(name: string): Promise<object>;
    add(db: string, name: string, structure: object): void;
}
declare const db: Db;
export { db };
