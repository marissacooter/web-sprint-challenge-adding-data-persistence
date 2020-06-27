const express = require("express")
const projectRouter = require('./routers/project-router')

const server = express()

server.use(express.json())
server.use('/api/project', projectRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: "My Server is running!"})
})

module.exports = server 