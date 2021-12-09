const { createFile } = require('./helpers/multiply');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption:true,
                    default: false
                })
                .check((argv,option) => {
                    if( isNaN(argv.base)){
                        throw 'the base is not a number'
                    }
                    return true;
                }).argv;

//limpiar consola
console.clear();
console.log(argv);
createFile(argv.base, argv.l)
.then( nombreArchivo => console.log(nombreArchivo))
.catch( err => console.log(err) );