import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from "./Task";
import ActionButtons from "./ActionButtons";
import CreateTask from "./createTask";

const TodoList = () => {

const [showCreateTask,setCreateTask]=useState(false);
 const [taskValue,setTaskValue]=useState("");
const [tasks, setTasks] = useState([

]);

  const [task, setTask] = useState({
        auteur: '',
        taskName: '',
        description: '',
        priority: 'none',
        categorie: ''
    });
   
    useEffect(()=>{
      fetchTasks();
   
    },[])
  

    const handleChange = (e) => {
        const { id, value } = e.target;
        setTask({
            ...task,
            [id]: value,
        });
    }

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/tasks', task, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Tâche ajoutée:', response.data);
 
    } catch (error) {
        console.error('Erreur lors de la création de la tâche:', error);
    }
    
      fetchTasks();
  
};
    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des tâches:', error);
        }
    };
  console.log(tasks);
  const handleClick= async(id)=>{
       try{
          await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
       const copy_tasks=tasks.filter(task=>task.id!=id);
        setTasks(copy_tasks);
       }catch(error){
          console.error('Erreur lors de suppression elements:', error);
       }
  }

  const handleAddTask=(taskValue)=>{
     const lastId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
    const copyTask=[...tasks,{id:lastId+1,text:taskValue,completed:false,priority: "medium",
    dueDate: "2024-10-25",
    category: "School",
    assignedTo: "Aymane",
    description: "Finish the Laravel project for school",
    createdAt: new Date()}]
  }
  const showTask=()=>{
    setCreateTask(!showCreateTask);
  }
   
  return (
    
     <div className=" w-full ">
      {showCreateTask?(
      <CreateTask taskValue={taskValue} task={task} handleSubmit={handleSubmit}  handleChange={handleChange} showTask={showTask}/>
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
          <Task key={task.id} task={task}  handleClick={ handleClick}/>
        ))}
      </ul>
    </div>
    {/*> */}
    </div>
  );
};

export default TodoList;
