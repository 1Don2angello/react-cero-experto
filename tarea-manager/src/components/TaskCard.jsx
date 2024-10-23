// TaskCard.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskCard = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="task-card" onClick={toggleExpand}>
      <h3>{task.titulo}</h3>
      <p>Materia: {task.materia}</p>
      <p>Urgente: {task.urgente ? 'Sí' : 'No'}</p>

      {isExpanded && (
        <div className="task-details">
          <p>Fecha Recibida: {task.fechaRecibida}</p>
          <p>Fecha Entrega: {task.fechaEntrega}</p>
          <p>Días Restantes: {task.DiasRestantes}</p>
          <p>Prioridad: {task.prioridad}</p>
          <p>Documentos: {task.documentos}</p>
          <p>Tipo: {task.tipo}</p>
        </div>
      )}
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    materia: PropTypes.string.isRequired,
    urgente: PropTypes.bool.isRequired,
    fechaRecibida: PropTypes.string.isRequired,
    fechaEntrega: PropTypes.string.isRequired,
    DiasRestantes: PropTypes.number.isRequired,
    prioridad: PropTypes.string.isRequired,
    documentos: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
