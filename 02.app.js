//------------------------------------------------------------
//Importar otros archivos usando modulos
//------------------------------------------------------------
// const multiplicar = require('./02.multiplicar/02.01.multiplicar');
const{ crearArchivo} = require('./02.multiplicar/02.01.multiplicar'); //Deestructuracion
let base = 'abc';

// console.log(multiplicar);

crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(e=> console.log(e))
