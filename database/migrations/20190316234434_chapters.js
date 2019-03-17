
exports.up = function (knex, Promise) {
    return knex.schema.createTable("Chapters", table => {
        table.increments();
        table.string("Name", 255).notNullable();
        table.string("State", 20);
        table.string("City", 100);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("chapters")
};
