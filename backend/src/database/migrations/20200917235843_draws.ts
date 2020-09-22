import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("draws", function (table) {
    table.increments("draw_id").primary()
    table.text("title").notNullable();
    table.text("subtitle").notNullable();
    table.timestamp("date_draw").notNullable();
    table.double("value").notNullable();
    table.text("description").notNullable();
    table.enum("status", ["closed", "active"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("draws");
}
