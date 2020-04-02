import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("user", (table: Knex.TableBuilder) => {
    table
      .uuid("id")
      .primary()
      .unique()
      .defaultTo(knex.raw("gen_random_uuid()"));
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
    table.boolean("active").defaultTo(true).index();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("user");
}
