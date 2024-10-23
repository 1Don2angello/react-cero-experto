import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    titulo: '',
    materia: '',
    fechaRecibida: new Date().toISOString().split('T')[0],
    fechaEntrega: '',
    urgente: false,
    prioridad: '',
    documentos: '',
    tipo: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!task.titulo || !task.materia || !task.fechaEntrega) {
      setError('Por favor, complete todos los campos obligatorios');
      return;
    }

    if (new Date(task.fechaEntrega) < new Date(task.fechaRecibida)) {
      setError('La fecha de entrega no puede ser anterior a la fecha recibida');
      return;
    }

    const diasRestantes = Math.ceil((new Date(task.fechaEntrega) - new Date(task.fechaRecibida)) / (1000 * 60 * 60 * 24));
    
    onAddTask({ ...task, diasRestantes });
    
    // Reiniciar el formulario
    setTask({
      titulo: '',
      materia: '',
      fechaRecibida: new Date().toISOString().split('T')[0],
      fechaEntrega: '',
      urgente: false,
      prioridad: '',
      documentos: '',
      tipo: '',
    });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Título"
        value={task.titulo}
        onChange={(e) => setTask({ ...task, titulo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Materia"
        value={task.materia}
        onChange={(e) => setTask({ ...task, materia: e.target.value })}
      />
      <input
        type="date"
        value={task.fechaRecibida}
        onChange={(e) => setTask({ ...task, fechaRecibida: e.target.value })}
      />
      <input
        type="date"
        value={task.fechaEntrega}
        onChange={(e) => setTask({ ...task, fechaEntrega: e.target.value })}
      />
      <label>
        Urgente:
        <input
          type="checkbox"
          checked={task.urgente}
          onChange={(e) => setTask({ ...task, urgente: e.target.checked })}
        />
      </label>
      <input
        type="text"
        placeholder="Prioridad"
        value={task.prioridad}
        onChange={(e) => setTask({ ...task, prioridad: e.target.value })}
      />
      <input
        type="text"
        placeholder="Documentos"
        value={task.documentos}
        onChange={(e) => setTask({ ...task, documentos: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tipo"
        value={task.tipo}
        onChange={(e) => setTask({ ...task, tipo: e.target.value })}
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
