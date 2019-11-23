const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todo.js');
const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// index view
app.get('/todo', (req, res) =>{
    Todo.find({}, (error,allTodo) => {
        res.render('Index', {
            todo: allTodo
        });
    });
});
// new
app.get('/todo/new', (req,res) => {
    res.render('New');
})
// create
app.post('/todo/', (req,res) => {
    Todo.create(req.body, (error, createdTodo)=>{
        res.redirect('/todo');
    });
});
// update
// delete



app.listen(3000, ()=>{
    console.log('listening');
});
