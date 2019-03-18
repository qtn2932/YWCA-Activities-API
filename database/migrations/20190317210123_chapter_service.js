
exports.up = function (knex, Promise) {
  return knex.schema.createTable("chapter_service", table => {
    table.string("Chapter", 255)
      .unsigned()
      .notNullable()
      .references("Name")
      .inTable("chapters")
      .onDelete("CASCADE");
    table.string("Service", 255)
      .unsigned()
      .notNullable()
      .references("Name")
      .inTable("services")
      .onDelete("CASCADE")
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("chapter_service")
};
