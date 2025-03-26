require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: 'postgresql://postgres:Legal%40123Legal@db.bngluubnxzcicgxaptbw.supabase.co:5432/postgres?sslmode=require',
    ssl: { rejectUnauthorized: false }
});

pool.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Database connection error", err);
    });

module.exports = pool;
