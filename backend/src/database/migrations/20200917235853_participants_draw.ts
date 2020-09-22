import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("participants_draw", function (table) {
    table.increments("participant_id")
    table.enum("status", ["free", "resevation", "sold"]).notNullable();
    table.integer("draw_quotas_draw_quota_id").notNullable();
    table.integer("users_user_id").notNullable();
    table.integer("draws_draw_id").notNullable();
    table.foreign("draw_quotas_draw_quota_id").references("draw_quotas.draw_quota_id");
    table.foreign("users_user_id").references("users.user_id");
    table.foreign("draws_draw_id").references("draws.draw_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("participants_draw");
}
