
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('Categories').insert([
      
      ])
    })
}
