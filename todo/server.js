const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.Promise = global.Promise;


// Config
const mongoURI = 'mongodb://localhost:4545/todo';
// Models
const Todo = require('./models/todo.js');
const todoSeed = require('./models/seed.js');

const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Todo.create(todoSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added tasks')
// })
// Todo.collection.drop();
// index view
app.get('/', (req, res) =>{
    Todo.find({}, (error,allTodo) => {
        res.render('Index', {
            todo: allTodo
        });
    });
});
// new
app.get('/new', (req,res) => {
    res.render('New');
})
// create
app.post('/', (req,res) => {
    Todo.create(req.body, (error, createdTodo)=>{
        res.redirect('/todo');
    });
});
// read
app.get('/:id', (req,res)=> {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('Show', {
           todo:foundTodo
        });
    });
});
// delete
app.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/todo');
    });
});
// update
app.get('/:id/edit', (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('Edit', {
            todo:foundTodo
        });
    })
})
// put
app.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/todo');
    });
});
// javascript actions
// $(() => {
//     $('#check').click(function () {
//         const $done = $('.notDone');
//         $done.toggleClass('done');       
//     })
// });




app.listen(4545, ()=>{
    console.log('listening');
});
