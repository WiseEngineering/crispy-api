import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable('logging', table => {
        table.increments('id').primary();
        table.string('data').notNullable();
        table.integer('job_id').unsigned();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.foreign('job_id').references('id').inTable('jobs');
    });
}


export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTableIfExists('logging');
}

