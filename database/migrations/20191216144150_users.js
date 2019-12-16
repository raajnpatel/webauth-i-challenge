exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username', 128)
            .notNullable()
            .unique();
        users
            .string('password', 128)
            .notNullable();// what happens if we delete the parents record (on roles)
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
