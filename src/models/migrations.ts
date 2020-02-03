import {create, remove, select, update} from "./index";

type Migration = {
    id: number
    name: string
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'migrations';

const migrations = () => select(tableName);
const createMigration = (parent : any, args : Migration) => create(parent, args, tableName);
const deleteMigration = (parent : any, args : Migration) => remove(parent, args, tableName);
const updateMigration = (parent : any, args : Migration) => update(parent, args, tableName);

export { migrations, createMigration, deleteMigration, updateMigration }
