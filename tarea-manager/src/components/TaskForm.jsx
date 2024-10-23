import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [subject, setSubject] = useState('');
  const [receivedDate, setReceivedDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !subject || !receivedDate || !dueDate) {
      alert('Por favor, complete todos los campos');
      return;
    }
    const daysLeft = Math.ceil((new Date(dueDate) - new Date(receivedDate)) / (1000 * 60 * 60 * 24));
    onAddTask({ task, subject, receivedDate, dueDate, daysLeft });
    setTask('');
    setSubject('');
    setReceivedDate('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Materia"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="date"
        value={receivedDate}
        onChange={(e) => setReceivedDate(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
