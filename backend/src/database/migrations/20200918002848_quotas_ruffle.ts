import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("quotas_raffle", function (table) {
    table.increments("quota_raffle_id").primary().notNullable();
    table.string("number", 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("quotas_raffle");
}
