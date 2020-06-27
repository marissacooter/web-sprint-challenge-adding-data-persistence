
exports.seed = function(knex) {
  return knex('task').del()
    .then(function () {
      return knex('task').insert([
        { description: 'Description for Task One', notes: 'Notes for Task One', completed: false },
        { description: 'Description for Task Two', notes: 'Notes for Task Two', completed: false },
        { description: 'Description for Task Three', notes: 'Notes for Task Three', completed: false }
      ]);
    });
};
