//Importing modules
const express = require('express')
const cors = require('cors')
require('./db')()

//Importing application routes
const todoRoutes = require('./routes/todoRoutes')

const PORT = process.env.PORT || 2065

//Initializing the express package
const app = express()


//Global Middlwares
app.use(cors())
app.use(express.json())
app.use(todoRoutes)


//Making our server listen to the port
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})