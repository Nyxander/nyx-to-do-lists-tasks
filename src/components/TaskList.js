import React,{useContext} from 'react'

import {TaskListCon} from './context/TaskListCon'
import Task from './Task'
const TaskList = () => {
    const {tasks} = useContext(TaskListCon)
    return 
    <div>
  <ul classname = 'list'>
   {tasks.map((tasks) => {
        return<Task/>;
   })}    
  </ul>      
    </div>
  
}

export default TaskList