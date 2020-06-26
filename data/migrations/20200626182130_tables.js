
exports.up = async function(knex) {
  await knex.schema.createTable("project", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description").notNull()
      table.integer("completed", 0)
  })

  await knex.schema.createTable("resource", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description").notNull()
  })
}

exports.down = async function(knex) {
  
}
