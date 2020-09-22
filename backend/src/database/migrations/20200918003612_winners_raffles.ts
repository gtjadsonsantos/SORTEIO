import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("winners_raffles", function (table) {
    table.increments("winner_id").notNullable();

    table.integer("participants_raffle_participant_id").notNullable();
    table
      .foreign("participants_raffle_participant_id")
      .references("participants_raffle.participant_id");

    table.text("image").notNullable();
    table.text("video");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("winners_raffles");
}
