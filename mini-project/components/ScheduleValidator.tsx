import React from 'react';

type ScheduleItem = {
  id: number;
  name: string;
  start: Date;
  end: Date;
};

type ScheduleValidatorProps = {
  schedule: ScheduleItem[];
  onValidate: (validSchedule: ScheduleItem[]) => void;
};

const ScheduleValidator: React.FC<ScheduleValidatorProps> = ({ schedule, onValidate }) => {
  const validateSchedule = () => {
    const conflicts: ScheduleItem[] = [];

    // Validar conflictos en el horario
    for (let i = 0; i < schedule.length; i++) {
      for (let j = i + 1; j < schedule.length; j++) {
        const itemA = schedule[i];
        const itemB = schedule[j];

        if (
          (itemA.start < itemB.end && itemA.end > itemB.start) || 
          (itemB.start < itemA.end && itemB.end > itemA.start)
        ) {
          conflicts.push(itemA, itemB);
        }
      }
    }

    if (conflicts.length > 0) {
      alert('Se encontraron conflictos en el horario');
    } else {
      alert('El horario es válido');
    }

    const validSchedule = schedule.filter((item) => !conflicts.includes(item));
    onValidate(validSchedule);
  };

  return (
    <div>
      <h2 style={styles.title}>Lista de Horarios</h2>
      <ul style={styles.list}>
        {schedule.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <strong>{item.name}</strong>: {item.start.toLocaleString()} - {item.end.toLocaleString()}
          </li>
        ))}
      </ul>
      <button style={styles.button} onClick={validateSchedule}>Validar Horario</button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  title: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ScheduleValidator;
