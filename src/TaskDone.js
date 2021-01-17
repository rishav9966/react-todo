import React, { Component } from 'react'

const TaskRows = (props) => {
    const allTasks = props.data.tasks.map(
        (task, i) => {
            const taskIndex = i;
            if (!task.isCompleted) {
                return null;
            }

            return (
                <tr key={i}>
                    <td>{task.title}</td>
                    <td>{task.desc}</td>
                </tr >
            );
        }
    )
    return allTasks;
}

const TaskDone = (props) => {
    return (
        <div className="table-responsive m-0 p-0">
            <table className="table table-bordered table-hover table-dark table-striped m-0">
                <colgroup>
                    <col span="1" style={{ width: "25%" }} />
                    <col span="1" style={{ width: "75%" }} />
                </colgroup>
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <TaskRows data={props} />
                </tbody>
            </table>
        </div>
    );
}
export default TaskDone