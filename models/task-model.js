const db = require('../data/config')

function find() {
    return db("task")
}

function findById(id) {
    return db("task")
        .where("id", id)
        .first()
}

function addTask(taskData) {
    return db("task")
        .insert(taskData)
}

module.exports = {
    find,
    findById,
    addTask
}