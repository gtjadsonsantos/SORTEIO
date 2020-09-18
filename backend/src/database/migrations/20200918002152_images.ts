import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("images", function (table) {
    table.increments("image_id").notNullable();

    table.text("name").notNullable();
    table.text("data_image").notNullable();
    table.integer("draws_draw_id").notNullable();
    table.foreign("draws_draw_id").references("draws.draw_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("images");
}
