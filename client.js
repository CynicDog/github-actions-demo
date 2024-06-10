const { Client } = require('pg');

const pgclient = new Client({
    // `process` object is used to access environment variables
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

pgclient.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
    if (err) throw err
});

pgclient.query(text, values, (err, res) => {
    if (err) throw err
});

pgclient.query('SELECT * FROM student', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    pgclient.end()
});

const redis = require("redis");

// Creates a new Redis client
// If REDIS_HOST is not set, the default host is localhost
// If REDIS_PORT is not set, the default port is 6379
const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.on("error", (err) => console.log("Error", err));

(async () => {
    await redisClient.connect();

    // Sets the key "octocat" to a value of "Mona the octocat"
    const setKeyReply = await redisClient.set("octocat", "Mona the Octocat");
    console.log("Reply: " + setKeyReply);
    // Sets a key to "species", field to "octocat", and "value" to "Cat and Octopus"
    const SetFieldOctocatReply = await redisClient.hSet("species", "octocat", "Cat and Octopus");
    console.log("Reply: " + SetFieldOctocatReply);
    // Sets a key to "species", field to "dinotocat", and "value" to "Dinosaur and Octopus"
    const SetFieldDinotocatReply = await redisClient.hSet("species", "dinotocat", "Dinosaur and Octopus");
    console.log("Reply: " + SetFieldDinotocatReply);
    // Sets a key to "species", field to "robotocat", and "value" to "Cat and Robot"
    const SetFieldRobotocatReply = await redisClient.hSet("species", "robotocat", "Cat and Robot");
    console.log("Reply: " + SetFieldRobotocatReply);

    try {
        // Gets all fields in "species" key
        const replies = await redisClient.hKeys("species");
        console.log(replies.length + " replies:");
        replies.forEach((reply, i) => {
            console.log("    " + i + ": " + reply);
        });
        await redisClient.quit();
    }
    catch (err) {
        // statements to handle any exceptions
    }
})();
