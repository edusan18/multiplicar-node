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
                .command('crear','Crea en Archivo de texto la tabla de multiplicar',{
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

const{crearArchivo} = require('./02.multiplicar/02.02.multiplicar'); //Deestructuracion
const{listarTabla} = require('./02.multiplicar/02.02.multiplicar'); //Deestructuracion
//let base = '5';

//console.log(argv);

let comando = argv._[0];

switch (comando){
    case 'listar':
        //console.log('listar');
        base = argv.base;
        limite = argv.limite;
        listarTabla(base,limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e=> console.log(e))
        break;
    case 'crear':
            //        console.log('crear');
            base = argv.base;
            crearArchivo(base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e=> console.log(e))
        break;

        default:
        console.log('Commando no reconocido');

}