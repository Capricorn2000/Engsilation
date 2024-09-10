const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig);

db.raw('SELECT 1+1 AS result')
  .then(() => {
    console.log('Connection successful');
  })
  .catch((err) => {
    console.error('Connection failed:', err);
  })
  .finally(() => {
    db.destroy(); // Đóng kết nối sau khi kiểm tra xong
  });
