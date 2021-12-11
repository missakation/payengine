const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 5433,
        user: 'payengineuser',
        password: 'payenginepassword',
        database: 'myapp_test'
    }
});