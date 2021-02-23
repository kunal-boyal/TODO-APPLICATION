//Importing the model so that we can talk to our database
const Todo = require('../model/Todo');

//All the controllers of out application that have logic of all the CRUD operations
module.exports = {
    getTodos: async (req, res) => {
        try {
            const todos = await Todo.find({})
            return res.status(200).json({ message: "succcess", data: todos })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    addTodo: async (req, res) => {
        try {
            const todo = new Todo({ ...req.body })
            await todo.save()
            return res.status(200).json({ message: "succcess", data: todo })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    editTodo: async (req, res) => {
        try {
            const id = req.params.id
            const todo = await Todo.findByIdAndUpdate({ _id: id }, { ...req.body })
            await todo.save()
            return res.status(200).json({ message: "succcess", data: todo })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    deleteTodo: async (req, res) => {
        try {
            const ids = req.body.ids
            await Todo.deleteMany({ _id: { $in: ids } })
            return res.status(200).json({ message: 'success' })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}