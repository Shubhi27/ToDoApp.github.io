import React, { createContext, useState, useEffect } from 'react';
import uuid from 'react-uuid'
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const initial = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTask] = useState(initial)
    const [edit, setEdit] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
        if(tasks===initial){
        document.title= `To-Do App`
        }
        else{
          document.title= `To-Do App(task pending..)`
        }
    });

    const addTask = (title) => {
        setTask([...tasks, { title, id: uuid() }])
    }

    const removeTask = id => {
        setTask(tasks.filter(task => task.id !== id))
    }
    const clearTask = () => {
        setTask([])
    }
    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        setEdit(item);
    }
    const editTask = (title, id) => {
        const newTask = tasks.map(task => (
            task.id === id ? { title, id } : task
        ))
        setTask(newTask);
        setEdit(null);
    };
    return (
        <>
            <TaskListContext.Provider
                value={{
                    tasks,
                    addTask,
                    removeTask,
                    clearTask,
                    findItem,
                    editTask,
                    edit
                }}>
                {props.children}
            </TaskListContext.Provider>
        </>
    )
}
export default TaskListContextProvider;