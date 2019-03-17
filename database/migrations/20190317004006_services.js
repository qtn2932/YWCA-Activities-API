
exports.up = function (knex, Promise) {
    return knex.schema.createTable("Services", table => {
        table.increments();
        table.string("Name").notNullable();
        table
         .integer("Category")
         .unsigned()
         .notNullable()
         .references("id")
         .inTable("Categories")
         .onDelete("CASCADE");
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("Services");
};