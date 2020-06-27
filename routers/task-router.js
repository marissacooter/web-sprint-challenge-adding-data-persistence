const express = require('express')
const task = require('../models/task-model')

const router = express.Router()

// GET
router.get('/', (req, res) => {
    task.find()
    .then(task => {
        res.json(task)
    })
    .catch(err => {
        res.json(500).json({ message: 'Failed to get task.'})
    })
})

// GET :id
router.get('/:id', (req, res) => {
    const { id } = req.params
    task.findById(id)
    .then(task => {
        if (task) {
            res.json(task)
        } else {
            res.status(404).json({ message: 'Could not find task with the given ID.'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get task.'})
    })
})

// POST
router.post("/", (req, res) => {
    const taskData = req.body
    task.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new task.'})
    })
})

module.exports = router