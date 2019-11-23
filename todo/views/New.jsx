const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class New extends React.Component {
    render() {
        return (
            <AppLayout>
                <h2>New Task</h2>
                <form action="/todo" method="POST">
                    Task: <input type="text" name="task" /><br/>
                    Due: <input type="date" name="dueDate" /><br/>
                    Priority: <input type="number" name="priority" placehold='On a scale of 1 to 5, 5 being the highest priority' /><br/>
                    <input class='btn-new' type="submit" name="" value="Create Task"/>
                </form>
            </AppLayout>
        )
    }
}

module.exports = New;