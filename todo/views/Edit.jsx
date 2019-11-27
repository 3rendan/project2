const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Edit Page">
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it */}
      <form action={`/${this.props.todo._id}?_method=PUT`} method="POST">
            Task: <input type="text" name="task" /><br/>
            Due: <input type="date" name="dueDate" /><br/>
            Priority: <input type="text" name="priority" /><br/>
            <input type="submit" name="" value="Edit Task"/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit;
