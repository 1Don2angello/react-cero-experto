import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const TaskCard = ({ task, onDelete, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [diasRestantes, setDiasRestantes] = useState(0);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit(task);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  useEffect(() => {
    const calcularDiasRestantes = () => {
      const fechaEntrega = new Date(task.fechaEntrega);
      const hoy = new Date();
      const diferencia = fechaEntrega - hoy;
      const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
      setDiasRestantes(dias);
    };

    calcularDiasRestantes();
  }, [task.fechaEntrega]);

  // Determina el color basado en los días restantes
  const getDiasColor = () => {
    if (diasRestantes <= 1) return 'red';
    if (diasRestantes <= 3) return 'yellow';
    return 'green';
  };

  return (
    <div className="task-card" onClick={toggleExpand}>
      <h3>{task.titulo}</h3>
      <p>Materia: {task.materia}</p>
      <p>Urgente: {task.urgente ? 'Sí' : 'No'}</p>
      <p style={{ color: getDiasColor() }}>Días Restantes: {diasRestantes}</p>

      {isExpanded && (
        <div className="task-details">
          <p>Fecha Recibida: {task.fechaRecibida}</p>
          <p>Fecha Entrega: {task.fechaEntrega}</p>
          <p style={{ color: getDiasColor() }}>Días Restantes: {diasRestantes}</p>
          <p>Prioridad: {task.prioridad}</p>
          <p>Documentos: {task.documentos}</p>
          <p>Tipo: {task.tipo}</p>
        </div>
      )}
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Eliminar</button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    materia: PropTypes.string.isRequired,
    urgente: PropTypes.bool.isRequired,
    fechaRecibida: PropTypes.string.isRequired,
    fechaEntrega: PropTypes.string.isRequired,
    prioridad: PropTypes.string.isRequired,
    documentos: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskCard;
