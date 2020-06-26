const express = require("express")

const server = express()

server.use(express.json())

// server.get('/', (req, res) => {
//     res.status(200).json({ message: "we made it!"})
// })

module.exports = server 