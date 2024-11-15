import React, { useState } from 'react';
import ScheduleValidator from '../../components/ScheduleValidator';

const App: React.FC = () => {
  const [schedule, setSchedule] = useState([
    { id: 1, name: 'Clase de Matemáticas', start: new Date('2024-11-15T08:00'), end: new Date('2024-11-15T10:00') },
    { id: 2, name: 'Clase de Física', start: new Date('2024-11-15T09:30'), end: new Date('2024-11-15T11:00') },
    { id: 3, name: 'Clase de Química', start: new Date('2024-11-15T11:00'), end: new Date('2024-11-15T12:30') },
  ]);

  return (
    <ScheduleValidator
      schedule={schedule}
      onValidate={(validSchedule) => {
        console.log('Horarios válidos:', validSchedule);
        setSchedule(validSchedule);
      }}
    />
  );
};

export default App;
