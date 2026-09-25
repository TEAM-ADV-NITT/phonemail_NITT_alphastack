require("dotenv").config();

const app = require("./src/app");
const pool = require("./src/config/db");

const PORT = process.env.PORT ;

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("❌ PostgreSQL connection failed:");
    console.error(err.message);
  } else {
    console.log("✅ PostgreSQL connected!");
    console.log("Database time:", result.rows[0]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});