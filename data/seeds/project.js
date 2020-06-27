
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'Marissa', description: 'Description One', completed: false},
        { name: 'Martha', description: 'Description Two', completed: false},
        { name: 'Maddie', description: 'Description Three', completed: false}
      ])
    })
}
