const express = require('express')
const route = express.Router()


route.get('/main', (req, res) => {
    res.sendFile('C:/DEV-WEB/aula-2/index.html')
})

module.exports = route;