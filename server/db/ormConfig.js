const knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: process.env.DATABASE_URL,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    }
});

module.exports = knex;