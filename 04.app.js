//------------------------------------------------------------
//Importar otros archivos usando modulos mandando parametros desde la consola
//------------------------------------------------------------

const{ crearArchivo} = require('./02.multiplicar/02.01.multiplicar'); //Deestructuracion
//let base = '5';

//console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(parametro);

crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(e=> console.log(e))