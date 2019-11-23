const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <div title="Todo List">
      <ul>
      {this.props.todo.map((todo,i) => {
                  return <li>
                      <a href={`/todo/${todo.id}`}>{todo.task} </a>  
                      <form action={`/todo/${todo._id}?_method=DELETE`} method="POST">
                          <input class="btn btn-primary m-2" type="submit" value="DELETE"/>
                      </form>
                      <a class="btn btn-primary m-2" href={`/todo/${todo._id}/edit`}>Edit This Task</a>
                  </li>
              })}
      </ul>
      <nav>
          <a class="btn btn-success m-2" href="/todo/new">Create a new task</a>
      </nav>
      </div>
    )
  }
}
module.exports= Index;
