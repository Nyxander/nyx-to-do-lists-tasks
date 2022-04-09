import React, {createContext, useState} from 'react'

export const TaskListCon = createContext()

const TaskListConPrivider = () => {
   const [tasks,setTasks]= useState([
        {task:'Read the book',id:1},
        {task:'Chore 2',id:2},
        {task:'Chore 3',id:3},
        
])
    return <TaskListConPrivider: value =>
}

export default TaskListConPrivider;