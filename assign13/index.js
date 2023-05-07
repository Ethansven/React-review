const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_15nvyi",
  password: "aqz6IcGv9o97ae4U",
  database: "lab_todo02_155xddx",
});
connection.connect(() => {
  console.log("Database is connected");
});
const port = 3000;
const app = express();
app.use(bodyParser.json({ type: "application/json" }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.post("/basic/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  var sql = mysql.format(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  console.log("DEBUG: /basic/login => " + sql);
  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    numRows = rows.length;
    if (numRows == 0) {
      res.json({
        success: false,
        message: "Login credential is incorrect",
      });
    } else {
      res.json({
        success: true,
        message: "Login credential is correct",
        user: rows[0],
      });
    }
  });
});

function possiblePassword(password) {
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
}

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!possiblePassword(password)) {
    return res.json({
      success: false,
      data: null,
      message: "Wrong password format",
    });
  }

  const passPassword = await bcrypt.hash(password, 10);

  connection.query(
    `INSERT INTO users (username,password, hashed_password) VALUES (?,?,?)`,
    [username, password, passPassword],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        res.json({
          success: true,
          data: {
            message: "Created success",
          },
        });
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        numRows = rows.length;
        if (numRows == 0) {
          return res.json({
            success: false,
            message: "Username doesn't exist",
          });
        }
        const passMatch = await bcrypt.compare(
          password,
          rows[0].hashed_password
        );
        if (!passMatch) {
          res.json({
            success: false,
            message: "the password is incorrect",
          });
        } else {
          res.json({
            success: true,
            message: "the password is correct",
            user: rows[0],
          });
        }
      }
    }
  );
});
