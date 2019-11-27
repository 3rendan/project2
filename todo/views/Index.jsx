const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Todo List">
      <ul className='col-sm-12'>
      {/* order tasks by list and by priority and due date w/in lists */}
      {this.props.todo.map((todo,i) => {
                  return <li className='list-group-item'>
                      <a href={`/${todo.id}`}><h2>{todo.task}</h2> </a> is due on 
                       <span><strong> {todo.dueDate}</strong></span> and is a {todo.priority} priority.
                      <form action={`/${todo._id}?_method=DELETE`} method="POST">
                          <input className="btn-danger" type="submit" value="DELETE"/>
                      </form>
                      <a className="btn-outline-info" href={`/${todo._id}/edit`}>Edit This Task</a>
                  </li>
              })}
      </ul>

      </AppLayout>
    )
  }
}
module.exports= Index;
