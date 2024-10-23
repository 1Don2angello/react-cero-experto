import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'; // Importa el archivo de estilos
import './components/TaskList'
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    titulo: '',
    materia: '',
    fechaRecibida: new Date().toISOString().split('T')[0],
    fechaEntrega: '',
    urgente: false,
    prioridad: '',
    documentos: '',
    tipo: '',
  });

  // Cargar todas las tareas desde la API
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7158/api/Tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.titulo || !newTask.materia || !newTask.fechaEntrega) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    try {
      await axios.post('https://localhost:7158/api/Tasks', newTask);
      fetchTasks(); // Recargar las tareas
      setNewTask({
        titulo: '',
        materia: '',
        fechaRecibida: new Date().toISOString().split('T')[0],
        fechaEntrega: '',
        urgente: false,
        prioridad: '',
        documentos: '',
        tipo: '',
      });
    } catch (error) {
      console.error('Error al añadir la tarea:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`https://localhost:7158/api/Tasks/${id}`);
      fetchTasks(); // Recargar las tareas
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>

      <div className="task-form">
        <label>
          Título:
          <input
            type="text"
            placeholder="Título"
            value={newTask.titulo}
            onChange={(e) => setNewTask({ ...newTask, titulo: e.target.value })}
          />
        </label>
        <label>
          Materia:
          <input
            type="text"
            placeholder="Materia"
            value={newTask.materia}
            onChange={(e) => setNewTask({ ...newTask, materia: e.target.value })}
          />
        </label>
        <label>
          Fecha Recibida:
          <input
            type="date"
            value={newTask.fechaRecibida}
            onChange={(e) => setNewTask({ ...newTask, fechaRecibida: e.target.value })}
          />
        </label>
        <label>
          Fecha de Entrega:
          <input
            type="date"
            value={newTask.fechaEntrega.split('T')[0]} // Formato de fecha
            onChange={(e) => setNewTask({ ...newTask, fechaEntrega: e.target.value })}
          />
        </label>
        <label>
          Urgente:
          <input
            type="checkbox"
            checked={newTask.urgente}
            onChange={(e) => setNewTask({ ...newTask, urgente: e.target.checked })}
          />
        </label>
        <label>
          Prioridad:
          <input
            type="text"
            placeholder="Prioridad"
            value={newTask.prioridad}
            onChange={(e) => setNewTask({ ...newTask, prioridad: e.target.value })}
          />
        </label>
        <label>
          Documentos:
          <input
            type="text"
            placeholder="Documentos"
            value={newTask.documentos}
            onChange={(e) => setNewTask({ ...newTask, documentos: e.target.value })}
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            placeholder="Tipo"
            value={newTask.tipo}
            onChange={(e) => setNewTask({ ...newTask, tipo: e.target.value })}
          />
        </label>
        <button onClick={handleAddTask}>Añadir Tarea</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.titulo} - {task.materia} - {task.fechaEntrega} - {task.fechaRecibida}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
