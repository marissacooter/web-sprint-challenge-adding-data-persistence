const express = require('express')
const project = require('../models/project-model')

const router = express.Router()

// GET
router.get('/', (req, res) => {
    project.find()
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get project.'})
    })
})

// GET :id
router.get('/:id', (req, res) => {
    const { id } = req.params
    project.findById(id)
    .then(project => {
        if (project) {
            res.json(project)
        } else {
            res.status(404).json({ message: 'Could not find project with the given ID.'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get project.'})
    })
})

// POST
router.post('/', (req, res) => {
    const projectData = req.body
    project.addProject(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new project.'})
    })
})

module.exports = router