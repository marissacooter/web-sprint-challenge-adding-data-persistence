
exports.seed = function(knex) {
  return knex('task_resource').del()
    .then(function () {
      return knex('task_resource').insert([
        { task_id: 1, resource_id: 1},
        { task_id: 2, resource_id: 2},
        { task_id: 3, resource_id: 3}
      ]);
    });
};
