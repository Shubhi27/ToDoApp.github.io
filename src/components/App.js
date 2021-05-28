import React from 'react';
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";
import Heading from "./Heading";
import TaskListContextProvider from "../context/TaskListContext"
const App = () => {
    return (
        <TaskListContextProvider>
        <div className="container">
        <div className="app-wrapper">
        <Heading />
        <div className="main">
        <TaskAdd />
           <TaskList />
           </div>
           </div>
        </div>
     </TaskListContextProvider>
    )
}

export default App
