const mongoose = require('mongoose');

// const Number = [1, 2,3,4,5];


const TodoSchema = new mongoose.Schema({
//   listName: String, array of values that can be added to 
  task: {type: String, required:true},
  dueDate: {type: String, max: 5},
  priority: {type: String },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
// module.exports = Number;