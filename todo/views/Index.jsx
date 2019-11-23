const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Todo List">
      <ul className='tasks'>
      {this.props.todo.map((todo,i) => {
                  return <li>
                      <a href={`/todo/${todo.id}`}>{todo.task} </a>  
                      <form action={`/todo/${todo._id}?_method=DELETE`} method="POST">
                          <input class="btn btn-new m-2" type="submit" value="DELETE"/>
                      </form>
                      <a class="btn" href={`/todo/${todo._id}/edit`}>Edit This Task</a>
                  </li>
              })}
      </ul>

      </AppLayout>
    )
  }
}
module.exports= Index;
