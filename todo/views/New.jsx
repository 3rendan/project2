const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class New extends React.Component {
    render() {
        const choice = ['high', 'low'];
        const listItems = choice.map((choice) =>
            <option value='{choice}'>{choice}</option>
        );

        return (
            <AppLayout>
                <h2>New Task</h2>
                <form action="/todo" method="POST">
                    Task: <input type="text" name="task" /><br/>
                    Due: <input type="date" name="dueDate" /><br/>
                    Priority: <select name="priority" value={choice}></select>
                    List: <input type='string' name="list"/><br />
                    
                    {/* Priority: <select name="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    </select> */}
                    
                    <input className='btn-new' type="submit" name="" value="Create Task"/>
                </form>
            </AppLayout>
        )
    }
}

module.exports = New;