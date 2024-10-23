// src/components/TaskList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7158/api/Tasks');
      const updatedTasks = response.data.map((task) => ({
        ...task,
        DiasRestantes: Math.ceil(
          (new Date(task.FechaEntrega) - new Date()) / (1000 * 60 * 60 * 24)
        ),
      }));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      alert('No se pudo conectar con la API.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Gestor de Tareas</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
