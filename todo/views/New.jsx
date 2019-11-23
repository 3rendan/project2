const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Todo Item</h1>
                <form action="/todo" method="POST">
                    Task: <input type="text" name="task" /><br/>
                    Due: <input type="date" name="dueDate" /><br/>
                    Priority: <input type="number" name="priority" placehold='On a scale of 1 to 5, 5 being the highest priority' /><br/>
                    <input type="submit" name="" value="Create Task"/>
                </form>
            </div>
        )
    }
}

module.exports = New;