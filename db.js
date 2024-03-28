const { Pool } = require('pg');
const Promise = require('bluebird');

//Database Connection Configuration
const pool = new Pool({
    Promise: Promise,
    user: 'Check',
    host: 'localhost',
    database: 'postgres',
    password: 'Check890',
    port: 5432,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

//Attempt to connect to the database
pool.connect((err, client, done) => {
    if(err) {
        console.error('Failed to connect to the database:', err);
    } else {
        console.log("Connected to the database successfully");

        //Release the client back to the pool
        done();
    }
})


//Close the pool when your application exists
// pool.end().then(() => console.log("Pool has been closed"));

module.exports = pool;