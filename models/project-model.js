const db = require("../data/config")

function find() {
    return db("project")
}

function findById(id) {
    return db("project")
        .where("id", id)
        .first()
}

function add(projectData) {
    return db("project")
        .insert(projectData)
}

module.exports = {
    find,
    findById,
    add
}