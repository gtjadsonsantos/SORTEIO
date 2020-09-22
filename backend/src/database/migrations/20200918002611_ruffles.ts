import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("raffles", function (table) {
    table.increments("raffle_id").primary().notNullable()
    table.text("title").notNullable();
    table.text("subtitle").notNullable();
    table.text("image").notNullable();
    table.timestamp("date_raffle").notNullable();
    table.double("value").notNullable();
    table.text("description").notNullable();
    table.enum("status", ["closed", "active"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("raffles");
}
