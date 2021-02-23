const express = require('express')

const router = express.Router()

//Importing the controllers
const { addTodo, editTodo, deleteTodo, getTodos } = require('../controllers/todoControllers')

//Routes that client will hit for CRUD operations
router.get('/getTodos', getTodos)
router.post('/addTodo', addTodo)
router.put('/editTodo/:id', editTodo)
router.delete('/deleteTodo', deleteTodo)

//Exporitng the router instance
module.exports = router