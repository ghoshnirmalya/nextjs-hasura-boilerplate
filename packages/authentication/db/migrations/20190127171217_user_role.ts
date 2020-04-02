import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("user_role", (table: Knex.TableBuilder) => {
    table
      .uuid("id")
      .primary()
      .unique()
      .defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("role_id").unsigned().index().references("id").inTable("role");
    table.uuid("user_id").unsigned().index().references("id").inTable("user");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("user_role");
}
