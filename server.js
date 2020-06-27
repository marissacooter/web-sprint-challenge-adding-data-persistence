const express = require("express")
const projectRouter = require('./routers/project-router')
const resourceRouter = require('./routers/resource-router')

const server = express()

server.use(express.json())
server.use('/api/project', projectRouter)
server.use('/api/resource', resourceRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: "My Server is running!"})
})

module.exports = server 