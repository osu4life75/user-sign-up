# user-sign-up

# mysql-commands
-- Database Commands

-- Create a new database
CREATE DATABASE my_database;

-- Drop a database
DROP DATABASE my_database;

-- Use a specific database
USE my_database;

-- Show all databases
SHOW DATABASES;

-- Show current database
SELECT DATABASE();

-- Table Commands

-- Create a new table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

create table  gender (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gender varchar (20) not null
);

-- Drop a table
DROP TABLE users;

-- Show all tables in the current database
SHOW TABLES;

-- Show the structure of a table
DESCRIBE users;  -- Or DESC users;

-- Data Manipulation Commands

-- Insert data into a table
INSERT INTO users (username, email, password) VALUES ('john_doe', 'john@example.com', 'hashed_password');

-- Select all data from a table
SELECT * FROM users;

-- Select specific columns from a table
SELECT username, email FROM users;

-- Select data with a condition
SELECT * FROM users WHERE id = 1;

-- Update existing data in a table
UPDATE users SET email = 'new_email@example.com' WHERE id = 1;

-- Delete data from a table
DELETE FROM users WHERE id = 1;

-- Count the number of rows in a table
SELECT COUNT(*) FROM users;

-- Aggregate Functions

-- Get the maximum value in a column
SELECT MAX(id) FROM users;

-- Get the minimum value in a column
SELECT MIN(id) FROM users;

-- Get the average value in a column
SELECT AVG(id) FROM users;

-- Grouping Results

-- Group data and count occurrences
SELECT username, COUNT(*) FROM users GROUP BY username;

-- Ordering Results

-- Order results by a specific column
SELECT * FROM users ORDER BY username ASC;  -- ASC for ascending, DESC for descending

-- Limit the number of results
SELECT * FROM users LIMIT 10;

-- Joining Tables

-- Inner join two tables
SELECT users.username, orders.order_id 
FROM users 
INNER JOIN orders ON users.id = orders.user_id;

-- Left join two tables
SELECT users.username, orders.order_id 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id;

sel

-- Right join two tables
SELECT users.username, orders.order_id 
FROM users 
RIGHT JOIN orders ON users.id = orders.user_id;

-- Miscellaneous Commands

-- Show the current user
SELECT CURRENT_USER();

-- Show the current time
SELECT NOW();

-- Create an index on a column
CREATE INDEX idx_username ON users (username);

-- Drop an index
DROP INDEX idx_username ON users;

-- Transaction Control

-- Start a transaction
START TRANSACTION;

-- Commit a transaction
COMMIT;

-- Rollback a transaction
ROLLBACK;

-- Setting SQL Modes

-- Set the SQL mode
SET sql_mode = 'STRICT_TRANS_TABLES';

-- Example of combining multiple commands
USE my_database;
SHOW TABLES;
SELECT * FROM users WHERE username LIKE 'j%';
