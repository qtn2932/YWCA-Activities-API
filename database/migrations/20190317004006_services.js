
exports.up = function (knex, Promise) {
    return knex.schema.createTable("services", table => {
        table.increments();
        table.string("Name").notNullable();
        table
         .string("Category",255)
         .unsigned()
         .notNullable()
         .references("Name")
         .inTable("categories")
         .onDelete("CASCADE");
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("services");
};