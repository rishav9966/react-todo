import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css'
import Task from './Task'
import Form from './Form'
import TaskDone from './TaskDone'


class App extends Component {
    state = {
        tasks: [
            {
                title: 'Task1',
                desc: 'Task1',
                isCompleted: false,
            },
            {
                title: 'Task2',
                desc: 'Task2',
                isCompleted: false,
            },
            {
                title: 'Task3',
                desc: 'Task3',
                isCompleted: false,
            },
            {
                title: 'Task4',
                desc: 'Task4',
                isCompleted: false,
            }
        ],
    }

    handleSubmit = (task) => {
        console.log(task);
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    handleComplete = (index) => {
        const tasks = this.state.tasks.slice();
        tasks.map((t, i) => {
            if (i === index) {
                t.isCompleted = !t.isCompleted;
            }
            return t
        });
        this.setState({ tasks: tasks })
    }

    render() {
        return (
            <div className="container">
                <div style={{ display: "table", width: "100%", height: "100vh", overflow: "hidden" }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                        <div className="bg-dark app-main-frame">
                            <Router>

                                <div className="bg-dark p-3">
                                    <Link className="btn btn-lg btn-outline-info mx-3 my-1" to="/">Home</Link>
                                    <Link className="btn btn-lg btn-outline-info mx-3 my-1" to="/AddTaskForm">Add Task</Link>
                                    <Link className="btn btn-lg btn-outline-info mx-3 my-1" to="/CompletedTask">Completed Task</Link>
                                </div>
                                <Switch>
                                    <Route path="/AddTaskForm">
                                        <Form handleSubmit={this.handleSubmit} />
                                    </Route>
                                    <Route path="/CompletedTask">
                                        <TaskDone tasks={this.state.tasks} />
                                    </Route>
                                    <Route path="/">
                                        <Task tasks={this.state.tasks} handleComplete={this.handleComplete} />
                                    </Route>
                                </Switch>

                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} export default App;
