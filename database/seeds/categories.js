
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {Name:"Racial Justice and Civil Rights"},
        {Name:"Domestic Violence"},
        {Name:"Sexual Assault"},
        {Name:"Housing"},
        {Name:"Childcare and Child Development"},
        {Name:"Youth\\Teen Development"},
        {Name:"Economic Empowerment"},
        {Name:"Health and Wellness"},
      ])
    })
}
