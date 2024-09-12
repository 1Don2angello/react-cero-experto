//funciones en 35

// const saludar  = function (nombre) {
//   return `Hola, ${nombre}`; 
// }
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
  }
  const saludar3 = (nombre) => `Hola, ${nombre}`;
  
  const saludar4 = () => 'Hola mundo';
  //console.log(saludar{'Goku'})
  console.log(saludar2 ('Goku'))
  console.log(saludar3 ('Vegueta'));
  console.log(saludar4 ());
  
  const getUser = () =>{
    return{
      uid: 'ABC123',
      username: 'EL123',
    }
  }
  console.log(getUser())
  
  
  function getUserioActivo (nombre){
  
    return{
      uid: 'ABC123',
      username: nombre,
    }
  }
  
  const usuarioActivo = getUserioActivo('Fernando');
  console.log (usuarioActivo);
  
  