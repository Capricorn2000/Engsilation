/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("wordListWords").insert([
    { wordId: 1, wlId: 1 },
    { wordId: 2, wlId: 1 },
    { wordId: 4, wlId: 1 },
    { wordId: 10, wlId: 1 },

    { wordId: 3, wlId: 2 },
    { wordId: 5, wlId: 2 },
    { wordId: 7, wlId: 2 },
    { wordId: 9, wlId: 2 },

    { wordId: 6, wlId: 3 },
    { wordId: 8, wlId: 3 },
    { wordId: 9, wlId: 3 },

    { wordId: 1, wlId: 4 },
    { wordId: 9, wlId: 4 },
    { wordId: 4, wlId: 4 },
    { wordId: 6, wlId: 4 },
    { wordId: 3, wlId: 4 },
  ]);
};
