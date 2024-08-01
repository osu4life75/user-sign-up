// db.js
const mysql = require("mysql2");
require("dotenv").config();

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("MySQL Connected...");
});

// Function to create a new user
const createUser = (username, email, password, callback) => {
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [username, email, password], (err, result) => {
        callback(err, result);
    });
};

// Function to find a user by username and password
const findUser = (username, password, callback) => {
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.query(sql, [username, password], (err, results) => {
        callback(err, results);
    });
};

// Export the functions
module.exports = {
    createUser,
    findUser
};
