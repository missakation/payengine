exports.up = function (knex, Promise) {
    return knex.schema.table('users', function (table) {
        table.string('merchandise_hash');
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('users', function (table) {
        table.dropColumn('merchandise_hash');
    })
}