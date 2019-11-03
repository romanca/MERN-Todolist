const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
     description: {
        type: String
    },
     category: {
        type: String
    },
     priority: {
        type: String
    },
});

module.exports = mongoose.model('Todo', Todo);