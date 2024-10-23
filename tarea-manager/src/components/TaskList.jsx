// TaskList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Para la edición de tareas

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7158/api/Tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      alert('No se pudo conectar con la API.');
    }
  };

  const createTask = async (task) => {
    try {
      const response = await axios.post('https://localhost:7158/api/Tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      alert('No se pudo crear la tarea.');
    }
  };

  const updateTask = async (task) => {
    try {
      await axios.put(`https://localhost:7158/api/Tasks/${task.id}`, task);
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
      setEditingTask(null); // Resetea la tarea en edición
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      alert('No se pudo actualizar la tarea.');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://localhost:7158/api/Tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      alert('No se pudo eliminar la tarea.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-list">
      <h1>Lista de Tareas</h1>
      
      <TaskForm onSubmit={editingTask ? updateTask : createTask} initialData={editingTask} />
      {tasks.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onDelete={deleteTask} 
          onEdit={setEditingTask} // Setea la tarea en edición
        />
      ))}
    </div>
  );
};

export default TaskList;
