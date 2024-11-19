import React, { useState } from 'react';
import ScheduleValidator from '../../components/ScheduleValidator';

const App: React.FC = () => {
  const [schedule, setSchedule] = useState([
    { id: 1, name: 'Clase de Matemáticas', start: new Date('2024-11-15T08:00'), end: new Date('2024-11-15T10:00') },
    { id: 2, name: 'Clase de Física', start: new Date('2024-11-15T09:30'), end: new Date('2024-11-15T11:00') },
    { id: 3, name: 'Clase de Química', start: new Date('2024-11-15T11:00'), end: new Date('2024-11-15T12:30') },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gestor de Horarios</h1>
      <div style={styles.scheduleContainer}>
        <ScheduleValidator
          schedule={schedule}
          onValidate={(validSchedule) => {
            console.log('Horarios válidos:', validSchedule);
            setSchedule(validSchedule);
          }}
        />
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center' as const,
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  scheduleContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default App;
