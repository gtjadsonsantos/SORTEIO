import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("business", function (table) {
    table.increments("business_id").notNullable();
    table.string("cnpj", 14).notNullable();
    table.string("fantasy_name", 255).notNullable();
    table.text("logo").notNullable();
    table.text("social").notNullable();
    table.string("phone", 11).notNullable();
    table.text("regulation");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("business");
}
