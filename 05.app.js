//------------------------------------------------------------------------
//-- Usando Yargs para la paremtrizacion desde consola
//------------------------------------------------------------------------

const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',{
                    base:{
                        demand: true,
                        alias: 'b'
                    },
                    limite:{
                        alias: 'l',
                        default: 10
                    }

                })
                .help()
                .argv;

const{ crearArchivo} = require('./02.multiplicar/02.01.multiplicar'); //Deestructuracion
//let base = '5';

//console.log(process.argv);
let argv2 = process.argv;
console.log('Base: ', argv.base);
console.log('Limite: ', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(parametro);

// crearArchivo(base)
// .then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(e=> console.log(e))
