import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, onDeleteTask }) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>
        <h3>{task.task} - {task.subject}</h3>
        <p>Recibida: {task.receivedDate} | Entrega: {task.dueDate}</p>
        <p>Días Restantes: {task.daysLeft}</p>
        <button onClick={() => onDeleteTask(index)}>
          <FaTrash /> Eliminar
        </button>
      </li>
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      receivedDate: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      daysLeft: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
