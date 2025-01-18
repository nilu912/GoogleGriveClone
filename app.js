const express = require('express')
const usersRoutes = require('./routes/users.routes')
const app = express()

app.set('view engine', 'ejs')

app.use('/user', usersRoutes)

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})