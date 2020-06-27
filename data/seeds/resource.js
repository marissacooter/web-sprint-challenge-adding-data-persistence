
exports.seed = function(knex) {
  return knex('resource').del()
    .then(function () {
      return knex('resource').insert([
        { name: 'Resource One', description: 'Description for Resource One' },
        { name: 'Resource Two',  description: 'Description for Resource Two' },
        { name: 'Resource Three', description: 'Description for Resource Three' }
      ]);
    });
};
