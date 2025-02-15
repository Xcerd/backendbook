import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: "trolley.proxy.rlwy.net",  // ✅ FIXED - Now it's a valid string
  user: "root",
  password: "OmksFVATaWEHnewLXiXmQPMfHJmexZye",
  database: "railway"
});

export default db;
