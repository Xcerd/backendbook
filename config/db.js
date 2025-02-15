import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: "${{RAILWAY_PRIVATE_DOMAIN}}",  // ✅ FIXED - Now it's a valid string
  user: "root",
  password: "OmksFVATaWEHnewLXiXmQPMfHJmexZye",
  database: "railway"
});

export default db;
