const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoScheme = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})

const Todos = mongoose.model('Todos', todoScheme)

module.exports = Todos