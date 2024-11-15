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
          (itemA.start < itemB.end && itemA.end > itemB.start) || // A solapa con B
          (itemB.start < itemA.end && itemB.end > itemA.start) // B solapa con A
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
      <h1>Schedule Validator</h1>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>
            {item.name}: {item.start.toLocaleString()} - {item.end.toLocaleString()}
          </li>
        ))}
      </ul>
      <button onClick={validateSchedule}>Validar Horario</button>
    </div>
  );
};

export default ScheduleValidator;
