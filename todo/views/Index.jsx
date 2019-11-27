const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Todo List">
      <ul className='tasks'>
      {/* order tasks by list and by priority and due date w/in lists */}
      {this.props.todo.map((todo,i) => {
                  return <li>
                  <input type='checkbox' />
                      <a href={`/${todo.id}`}>{todo.task} </a> is due on <br />
                      <span className="date-due">{todo.dueDate.toString()}</span>

                      <form action={`/${todo._id}?_method=DELETE`} method="POST">
                          <input className="btn confirmDelete" type="submit" value="DELETE"/>
                      </form>
                      <a className="btn" href={`/${todo._id}/edit`}>Edit This Task</a>
                  </li>
              })}
      </ul>

      </AppLayout>
    )
  }
}
module.exports= Index;


