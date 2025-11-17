interface Structure {
    keys: {
        [key: string]: any;
    };
    fields: {
        [key: string]: any;
    };
}
declare const db: {
    _structures: {};
    _connections: {};
    _stores: {};
    ok: boolean;
    updateStructure(storeName: any, structure: any, req: any): void;
    open(name: any): Promise<unknown>;
    add(database: string, name: string, structure: Structure): void;
};
export default db;
