import React, { useEffect,useContext, useState } from 'react';
import axios from 'axios';
import Task from "./Task";
import ActionButtons from "./ActionButtons";
import CreateTask from "./createTask";
import { TaskContext } from './TaskProvider';
const TodoList = () => {
const { tasks, showCreateTask,showTask,task, setShowCreateTask } = useContext(TaskContext);

console.log(tasks);
  return (
    
     <div className=" w-full ">
      {showCreateTask?(
      <CreateTask/>
      ):null}
     
    <div className="w-full h-screen flex flex-col items-center ">
      <h1 className="text-6xl text-slate-500 font-medium">TODO LIST</h1>
        <div className="">
             
      <button onClick={showTask}
        className="  flex justify-center items-center gap-2  h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6] text-nowrap mb-3 join-item "
      >
        Create task
      </button>
        </div>
        <ul className="flex flex-col gap-3 bg-slate-200 rounded-md py-5 items-center shadow-lg w-1/2 px-5">
          
        {tasks.map((task) => (
          <Task key={task.id} task={task}  />
        ))}
      </ul>
    </div>
    {/*> */}
    </div>
  );
};

export default TodoList;
