import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments("user_id").notNullable();
    table.string("name", 255).notNullable();
    table.string("cpf", 11).notNullable();
    table.string("email", 255).notNullable();
    table.string("phone", 11).notNullable();
    table.string("password").notNullable();
    table.string("address").notNullable()
    table.enum("type", ["comum", "admin"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
