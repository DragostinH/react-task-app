import React from "react";

const Overview = (props) => {
    const { tasks, handleDelete, handleEdit, handleTaskChange } = props;

    return (
        <div className="task-container">

            {tasks.map((task) => {
                let isEditible = task.isEditible;
                let taskDiv;
                if (!isEditible) {
                    taskDiv = <div
                        key={task.id}
                        id={task.text}
                        className="task">
                        <p>{task.position + " " + task.text}
                            <span onClick={() => handleDelete(task.id)}>Delete Task</span>
                            <span onClick={(e) => handleEdit(task, e)}>{task.editBtn}</span>
                        </p>
                    </div>
                } else {
                    taskDiv = <div
                        key={task.id}
                        id={task.text}
                        className="task">
                        <textarea value={task.text} onChange={(e) => handleTaskChange(task, e)} />
                        <span onClick={() => handleDelete(task.id)}>Delete Task</span>
                        <span onClick={(e) => handleEdit(task, e)}>{task.editBtn}</span>
                    </div>
                }
                return taskDiv
            })}
            {/* {tasks.map((task) => {
                return <div
                    key={task.id}
                    id={task.text}
                    className="task">
                    <p>{task.position + " " + task.text}
                        <span onClick={() => handleDelete(task.id)}>Delete Task</span>
                        <span onClick={(e) => handleEdit(task, e)}>{task.editBtn}</span>
                    </p>
                </div>
           })} */}
        </div>

    )
}

export default Overview;