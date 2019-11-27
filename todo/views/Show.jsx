const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Show extends React.Component {
    render(){
        return (
            <AppLayout title="Todo Item">
                <h1>{ this.props.todo.task }</h1>
                It is due {this.props.todo.dueDate.toString()} and it is on the { this.props.todo.list } list.
            </AppLayout>
        )
    }
}
module.exports = Show;
