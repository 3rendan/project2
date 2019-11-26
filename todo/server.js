const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todo.js');

const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

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
// read
app.get('/todo/:id', (req,res)=> {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('Show', {
           todo:foundTodo
        });
    });
});
// delete
app.delete('/todo/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/todo');
    });
});
// update
app.get('/todo/:id/edit', (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('Edit', {
            todo:foundTodo
        });
    })
})
// put
app.put('/todo/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/todo');
    });
})




app.listen(3000, ()=>{
    console.log('listening');
});
