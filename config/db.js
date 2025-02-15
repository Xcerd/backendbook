import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: "trolley.proxy.rlwy.net",  // ✅ FIXED - Now it's a valid string
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

export default db;
