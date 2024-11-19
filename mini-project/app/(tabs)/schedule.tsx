import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScheduleValidator from '../../components/ScheduleValidator';

const App: React.FC = () => {
  const [schedule, setSchedule] = useState([
    { id: 1, name: 'Clase de Matemáticas', start: new Date('2024-11-15T08:00'), end: new Date('2024-11-15T10:00') },
    { id: 2, name: 'Clase de Física', start: new Date('2024-11-15T09:30'), end: new Date('2024-11-15T11:00') },
    { id: 3, name: 'Clase de Química', start: new Date('2024-11-15T11:00'), end: new Date('2024-11-15T12:30') },
  ]);

  const handleValidate = () => {
    console.log('Validar horario:', schedule);
  };

  const handleAdjust = () => {
    console.log('Ajustar horario:', schedule);
  };

  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.navLink}>Inicio</Link>
          <Link to="/schedule" style={styles.navLink}>Horarios</Link>
          <Link to="/about" style={styles.navLink}>Acerca de</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 style={styles.title}>Bienvenido al Gestor de Horarios</h1>
              </div>
            }
          />
          <Route
            path="/schedule"
            element={
              <div>
                <h1 style={styles.title}>Gestor de Horarios</h1>
                <div style={styles.scheduleContainer}>
                  {schedule.map((item) => (
                    <div key={item.id} style={styles.card}>
                      <h2 style={styles.cardTitle}>{item.name}</h2>
                      <p style={styles.cardTime}>
                        <strong>Inicio:</strong> {item.start.toLocaleTimeString()}
                      </p>
                      <p style={styles.cardTime}>
                        <strong>Fin:</strong> {item.end.toLocaleTimeString()}
                      </p>
                    </div>
                  ))}
                </div>
                <div style={styles.buttonContainer}>
                  <button style={styles.button} onClick={handleValidate}>
                    Validar Horario
                  </button>
                  <button style={styles.button} onClick={handleAdjust}>
                    Ajustar Horario
                  </button>
                </div>
                <ScheduleValidator
                  schedule={schedule}
                  onValidate={(validSchedule) => {
                    console.log('Horarios válidos:', validSchedule);
                    setSchedule(validSchedule);
                  }}
                />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <h1 style={styles.title}>Acerca de</h1>
                <p>Este es un gestor de horarios para organizar tu día a día.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
    textAlign: 'center' as const,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  title: {
    color: '#333',
    fontSize: '28px',
    marginBottom: '20px',
  },
  scheduleContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '10px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left' as const,
  },
  cardTitle: {
    fontSize: '18px',
    color: '#007bff',
    marginBottom: '10px',
  },
  cardTime: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default App;
