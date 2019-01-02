const Todos = require('../models/todoModels')

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res){
        const startupTodos =  [
            {
                username: 'Bean1',
                todo: "buy milk",
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Bean1',
                todo: "buy eggs",
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Bean1',
                todo: "buy bread",
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Bean2',
                todo: "buy beans",
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'Bean2',
                todo: "buy coke",
                isDone: false,
                hasAttachment: false
            }
        ]
        Todos.create(startupTodos, function(err, result){
            if(err) {
                console.error(err)
            }
            res.send(result)
        })
    })
}