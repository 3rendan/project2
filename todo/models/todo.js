const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
//   listName: String,
  task: {type: String, required:true},
  dueDate: String,
  priority: Number,
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;