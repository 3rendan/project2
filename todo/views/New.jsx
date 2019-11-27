const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class New extends React.Component {
    render() {
        
        return (
            <AppLayout>
                <h2>New Task</h2>
                <form action="/" method="POST">
                    Task: <input type="text" name="task" /><br/>
                    Due: <input type="text" name="dueDate" /><br/>
                    Priority: <select name="priority" value="priority">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>                   
                    <input className='btn-new' type="submit" name="submit" value="Create Task"/>
                </form>
            </AppLayout>
        )
    }
}

module.exports = New;