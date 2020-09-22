import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("participants_raffle", function (table) {
    table.increments("participant_id").notNullable();
    table.enum("status", ["free", "resevation", "sold"]).notNullable();
    table.integer("users_user_id").notNullable();
    table.integer("raffles_raffle_id").notNullable();
    table.integer("quotas_raffle_quota_raffle_id").notNullable();

    table.foreign("users_user_id").references("users.user_id");
    table.foreign("raffles_raffle_id").references("raffles.raffle_id");
    table
      .foreign("quotas_raffle_quota_raffle_id")
      .references("quotas_raffle.quota_raffle_id");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("participants_raffle");
}
