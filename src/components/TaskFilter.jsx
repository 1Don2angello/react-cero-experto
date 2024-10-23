import { useState } from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('titulo'); // 'titulo' o 'diasRestantes'

  const filteredTasks = tasks
    .filter((task) => task.titulo.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'diasRestantes') {
        const diasA = Math.ceil((new Date(a.fechaEntrega) - new Date()) / (1000 * 60 * 60 * 24));
        const diasB = Math.ceil((new Date(b.fechaEntrega) - new Date()) / (1000 * 60 * 60 * 24));
        return diasA - diasB;
      }
      return a.titulo.localeCompare(b.titulo);
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por título"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="titulo">Ordenar por Título</option>
        <option value="diasRestantes">Ordenar por Días Restantes</option>
      </select>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
