import React from 'react'

const TaskRows = (props) => {
    const allTasks = props.data.tasks.map(
        (task, i) => {
            const taskIndex = i;
            if (task.isCompleted) {
                return null;
            }

            return (
                <tr key={i}>
                    <td>{task.title}</td>
                    <td>{task.desc}</td>
                    <td className="text-center">
                        <button className="btn font-weight-bold btn-rounded btn-outline-primary text-light"
                            onClick={() => props.data.handleComplete(taskIndex)}
                        >
                            Completed
                        </button>
                    </td>
                </tr >
            );
        }
    )
    return allTasks;
}

const Task = (props) => {
    return (
        <div className="table-responsive m-0 p-0">
            <table className="table table-bordered table-hover table-dark table-striped m-0">
                <colgroup>
                    <col span="1" style={{ width: "25%" }} />
                    <col span="1" style={{ width: "60%" }} />
                    <col span="1" style={{ width: "15%" }} />
                </colgroup>
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <TaskRows data={props} />
                </tbody>
            </table>
        </div>
    );
}
export default Task