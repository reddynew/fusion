const {Pool}=require('pg');
const pool=new Pool({
    user:'postgres',
    host:'localhost',       
    database:'legal_web',
    password:'postgres',
    port:5432
});
pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error:', err.stack));

module.exports = pool;