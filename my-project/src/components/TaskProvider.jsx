import React, { useEffect, createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [showCreateTask, setCreateTask] = useState(false);
    const [taskValue, setTaskValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        auteur: '',
        taskName: '',
        description: '',
        priority: 'none',
        categorie: '',
        completed: false
    });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des tâches:', error);
        }
    };

    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [id]: value,
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreateTask(!showCreateTask);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/tasks', task, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Tâche ajoutée:', response.data);
            fetchTasks(); // Refresh task list after adding a new task
        } catch (error) {
            handleError(error, 'Erreur lors de la création de la tâche');
        }
    };

    const handleClick = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTasks(updatedTasks);
        } catch (error) {
            handleError(error, 'Erreur lors de la suppression');
        }
    };

    const handleAddTask = (taskValue) => {
        const lastId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
        const newTask = {
            id: lastId + 1,
            text: taskValue,
            completed: false,
            priority: "medium",
            dueDate: "2024-10-25",
            category: "School",
            assignedTo: "Aymane",
            description: "Finish the Laravel project for school",
            createdAt: new Date(),
        };
        setTasks([...tasks, newTask]);
    };

    const showTask = () => {
        setCreateTask(!showCreateTask);
    };

    const onChangeCompleted = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleError = (error, message) => {
        if (error.response) {
            console.error(`${message}:`, error.response.data);
            alert(`Erreur: ${error.response.data.message || 'Erreur inconnue'}`);
        } else if (error.request) {
            console.error(`${message}: Aucune réponse reçue`);
        } else {
            console.error(`${message}:`, error.message);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks,taskValue, showTask, showCreateTask, handleAddTask, task, handleClick, handleChange, handleSubmit, onChangeCompleted, fetchTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
