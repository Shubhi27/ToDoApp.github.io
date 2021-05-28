import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from "../context/TaskListContext"
const TaskAdd = () => {
    const [title, setTitle] = useState('')
    const { addTask, clearTask, editTask, edit } = useContext(TaskListContext);
    const handleSubmit = e => {
        e.preventDefault();
        if (!edit) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, edit.id);
        }
    }
    const handleChange = e => {
        setTitle(e.target.value);
    }
    useEffect(() => {
        if (edit) {
            setTitle(edit.title)
        }
        else {
            setTitle('')
        }
    }, [edit])
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input
                    onChange={handleChange}
                    value={title}
                    type="text"
                    className="task-input"
                    placeholder="Add Task" required></input>
                    <div className="buttons">
                    <button type="submit" className="btn add-task-btn"> {edit ? 'Edit Task' : 'Add Task'}</button>
                    <button onClick={clearTask} className="btn clear-btn"> Clear</button>
                </div>
            </form>
        </>
    )
}

export default TaskAdd
