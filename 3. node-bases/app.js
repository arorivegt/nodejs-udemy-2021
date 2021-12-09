const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs')

//limpiar consola
console.clear();
 
createFile(argv.base, argv.l)
.then( nombreArchivo => console.log(nombreArchivo))
.catch( err => console.log(err) );