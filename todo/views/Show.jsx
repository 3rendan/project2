const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Show extends React.Component {
    render(){
        return (
            <AppLayout title="Todo List">
                <h1>Task</h1>
                { this.props.todo.task } is due { this.props.todo.dueDate }
            </AppLayout>
        )
    }
}
module.exports = Show;