const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
//   listName: String,
  task: {type: String, required:true},
  dueDate: {type: String, max: 5},
  priority: Number,
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;