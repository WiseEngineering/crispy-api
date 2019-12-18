import * as Knex from "knex";


export async function up(Knex: Knex): Promise<any> {
    await Knex.schema.createTable('users', table => {
        table.string('id').notNullable().primary();
        table.string('name').notNullable();
    });
}


export async function down(Knex: Knex): Promise<any> {
    await Knex.schema.dropTableIfExists('users');
}
