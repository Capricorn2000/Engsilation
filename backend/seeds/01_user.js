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
      username: "aVanN",
      password: "admin",
      name: "Nguyen Van A",
      birthday: "2000-03-20",
      role: "1",
    },
    {
      username: "bMinT",
      password: "password123",
      name: "Tran Minh B",
      birthday: "1999-07-15",
      role: "0",
    },
    {
      username: "cThuH",
      password: "mypassword",
      name: "Hoang Thu C",
      birthday: "2001-11-30",
      role: "0",
    },
    {
      username: "dLanP",
      password: "securepwd",
      name: "Pham Lan D",
      birthday: "1998-05-22",
      role: "0",
    },
    {
      username: "eKhanH",
      password: "letmein",
      name: "Nguyen Khanh E",
      birthday: "2002-12-01",
      role: "0",
    },
    {
      username: "fAnhV",
      password: "password456",
      name: "Vu Anh F",
      birthday: "1997-09-10",
      role: "0",
    },
  ]);
};
e;
