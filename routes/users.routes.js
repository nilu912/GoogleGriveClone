const express = require('express')
const routes = express.Router()

routes.get('/test', (req, res)=>{
    res.send('test route works!')
})

module.exports = routes