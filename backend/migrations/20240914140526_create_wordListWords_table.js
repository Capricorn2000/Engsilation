/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("wordListWords", (table) => {
    table.increments("id").primary();
    table.integer("wordId").unsigned().notNullable(); // Khóa ngoại tham chiếu đến bảng words
    table
      .foreign("wordId")
      .references("wordId")
      .inTable("words")
      .onDelete("CASCADE");

    table.integer("wlId").unsigned().notNullable(); // Khóa ngoại tham chiếu đến bảng wordLists
    table
      .foreign("wlId")
      .references("wlId")
      .inTable("wordLists")
      .onDelete("CASCADE");

    table.unique(["wordId", "wlId"]); // Đảm bảo rằng mỗi cặp wordId-wlId là duy nhất
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("wordListWords");
};
