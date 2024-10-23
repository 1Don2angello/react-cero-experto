// src/components/TaskCard.jsx
import PropTypes from 'prop-types'; // Asegúrate de instalar prop-types si no lo tienes
import { useState } from 'react';
const TaskCard = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getPriorityLabel = (diasRestantes) => {
    if (diasRestantes <= 1) return 'Alta';
    if (diasRestantes <= 3) return 'Media';
    return 'Baja';
  };

  return (
    <div className="task-card" style={styles.card}>
      <h3 onClick={toggleExpanded} style={{ cursor: 'pointer' }}>
        {task.Titulo} - {task.Materia}
      </h3>
      <p>Prioridad: {getPriorityLabel(task.DiasRestantes)}</p>
      {isExpanded && (
        <div>
          <p>Fecha Recibida: {new Date(task.FechaRecibida).toLocaleDateString()}</p>
          <p>Fecha de Entrega: {new Date(task.FechaEntrega).toLocaleDateString()}</p>
          <p>Días Restantes: {task.DiasRestantes}</p>
          <p>Documentos: {task.Documentos}</p>
          <p>Tipo: {task.Tipo}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

// Validación de tipos de propiedades
TaskCard.propTypes = {
  task: PropTypes.shape({
    Titulo: PropTypes.string.isRequired,
    Materia: PropTypes.string.isRequired,
    DiasRestantes: PropTypes.number.isRequired,
    FechaRecibida: PropTypes.string.isRequired,
    FechaEntrega: PropTypes.string.isRequired,
    Documentos: PropTypes.string,
    Tipo: PropTypes.string,
  }).isRequired,
};

export default TaskCard;
