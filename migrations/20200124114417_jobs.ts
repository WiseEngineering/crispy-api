import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable('jobs', table => {
        table.increments('id').primary();
        table.integer('migration_id').unsigned();
        table.integer('worker_id').unsigned();
        table.enu('status', ["pending", "running", "failed", "finished"]).notNullable().defaultTo('pending');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.foreign('migration_id').references('id').inTable('migrations');
        table.foreign('worker_id').references('id').inTable('workers');
    });
}


export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTableIfExists('jobs');
}


