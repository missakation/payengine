// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: 5432,
      database: 'payengine',
      user: 'payengineuser',
      password: 'payenginepassword'
    },
    pool: {
      min: 2,
      max: 10
    }, 
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'db/seeds'
    }

  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
