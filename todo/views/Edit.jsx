const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Edit Page">     
      <form action={`/${this.props.todo._id}?_method=PUT`} method="POST">
            <label>Task:</label> <input type="text" name='task' defaultValue={this.props.todo.task}/><br/>
            <label>Due:</label> <input type="text" name='dueDate' defaultValue={this.props.todo.dueDate} /><br/>
            <label>Priority:</label>
              <select value='priority' name='priority' defaultValue={this.props.todo.priority}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
          <input type="submit" value="Submit Changes"/>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit;