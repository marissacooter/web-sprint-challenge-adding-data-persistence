const express = require('express')
const resource = require('../models/resource-model')

const router = express.Router()

// GET
router.get('/', (req, res) => {
    resource.find()
    .then(resource => {
        res.json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resource.'})
    })
})

// GET :id
router.get('/:id', (req, res) => {
    const { id } = req.params
    resource.findById(id)
    .then(resource => {
        if (resource) {
            res.json(resource)
        } else {
            res.status(404).json({ message: 'Could not find the resource with the given ID.'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resource.'})
    })
})

// POST
router.post('/', (req, res) => {
    const resourceData = req.body
    resource.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource.'})
    })
})

module.exports = router

