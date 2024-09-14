/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("wordLists", (table) => {
    table.increments("wlId").primary();
    table.string("wlName");
    table.integer("userId").unsigned().notNullable();
    table.foreign("userId").references("id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("wordLists");
};
