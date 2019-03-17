
exports.up = function (knex, Promise) {
    return knex.schema.createTable("Categories", table => {
        table.increments();
        table.string("Name").notNullable();
        table
         .string("Chapter",255)
         .unsigned()
         .notNullable()
         .references("Name")
         .inTable("Chapters")
         .onDelete("CASCADE");
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("Categories");
};
