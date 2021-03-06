import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable('workers', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('endpoint').notNullable();
        table.string('api_key').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTableIfExists('workers');
}

