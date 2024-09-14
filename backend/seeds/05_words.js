/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Xóa dữ liệu trong bảng words và wordListWords
  await knex("wordListWords").del();
  await knex("words").del();

  // Seed dữ liệu cho bảng words
  await knex("words").insert([
    {
      word: "arduous",
      wordType: "adjective",
      wordNote: "involving a lot of effort",
    },
    {
      word: "beneficial",
      wordType: "adjective",
      wordNote: "resulting in good; favorable",
    },
    {
      word: "coherent",
      wordType: "adjective",
      wordNote: "logical and consistent",
    },
    {
      word: "diligent",
      wordType: "adjective",
      wordNote: "showing care and effort in work or duties",
    },
    {
      word: "eminent",
      wordType: "adjective",
      wordNote: "famous and respected within a particular sphere",
    },
    {
      word: "flourish",
      wordType: "verb",
      wordNote: "grow or develop in a healthy or vigorous way",
    },
    {
      word: "genuine",
      wordType: "adjective",
      wordNote: "truly what something is said to be",
    },
    {
      word: "intricate",
      wordType: "adjective",
      wordNote: "very detailed and complicated",
    },
    {
      word: "meticulous",
      wordType: "adjective",
      wordNote: "showing great attention to detail",
    },
    {
      word: "obsolete",
      wordType: "adjective",
      wordNote: "out of date; no longer in use",
    },
  ]);
};
