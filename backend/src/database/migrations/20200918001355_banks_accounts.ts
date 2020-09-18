import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("banks_accounts", function (table) {
    table.increments("bank_account_id").notNullable();

    table.string("number_account").notNullable();
    table.string("name").notNullable();
    table.string("agency").notNullable();
    table.text("image").notNullable();
    table.string("cpf", 11);
    table.string("cnpj", 14);

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("banks_accounts");
}
