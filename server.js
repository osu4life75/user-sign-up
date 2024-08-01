// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { createUser, findUser } = require("./db"); // Import the functions from db.js
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Signup route
app.post('http://localhost:3000/createacct', (req, res) => {
    const { username, email, password } = req.body;
    createUser(username, email, password, (err, result) => {
        if (err) {
            return res.status(500).send("Error registering user");
        }
        res.send("User registered successfully");
    });
});

// Login route
app.post('http://localhost:3000/login', (req, res) => {
    const { username, password } = req.body;
    findUser(username, password, (err, results) => {
        if (err) {
            return res.status(500).send("Error logging in");
        }
        if (results.length > 0) {
            res.send("Login successful");
        } else {
            res.send("Invalid credentials");
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
