import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("winners_draws", function (table) {
    table.increments("winner_id").notNullable();

    table.integer("participants_draw_participant_id").notNullable();
    table
      .foreign("participants_draw_participant_id")
      .references("participants_draw.participant_id");

    table.text("image").notNullable();
    table.text("video");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("winners_draws");
}
