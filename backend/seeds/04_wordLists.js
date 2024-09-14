/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex.raw("ALTER TABLE users AUTO_INCREMENT = 1;");
  await knex("users").insert([
    {
      wlName: "Test1_wordList",
      userId: 2,
    },
    {
      wlName: "RandomList1",
      userId: 1,
    },
    {
      wlName: "VocabularySetA",
      userId: 2,
    },
    {
      wlName: "AdvancedWords",
      userId: 4,
    },
  ]);
};
e;
