const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema Designing
const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: ''
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo