console.log("hola mundo ");

const nombre = 'Fernando';
const apellido = 'Herrera';

//const nombrecompleto = nombre + '' +apellido;

const nombrecompleto = `
${nombre} 
${apellido}`;

console.log (nombrecompleto);

function getSaludo (nombre){
  return 'Hola mundo ' + nombre;
}

console.log (`Este es un texto: ${getSaludo(nombre)} `);
