import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("role", (table: Knex.TableBuilder) => {
    table
      .uuid("id")
      .primary()
      .unique()
      .defaultTo(knex.raw("gen_random_uuid()"));
    table.string("name").unique().notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("role");
}
