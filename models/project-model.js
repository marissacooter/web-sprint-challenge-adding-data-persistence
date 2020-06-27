const db = require("../data/config")

function find() {
    return db("project")
}

function findById(id) {
    return db("project")
        .where("id", id)
        .first()
}

function addProject(projectData) {
    return db("project")
        .insert(projectData)
}

module.exports = {
    find,
    findById,
    addProject
}