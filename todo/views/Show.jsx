const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Task</h1>
                { this.props.todo.task } is due { this.props.todo.dueDate }
            </div>
        )
    }
}
module.exports = Show;