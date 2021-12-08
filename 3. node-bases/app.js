const { createFile } = require('./helpers/multiply');
const arv = require('yargs').argv;

//limpiar consola
console.clear();

const [,,arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);
createFile(base)
.then( msj => console.log(msj))
.catch( err => console.log("ERROR",err));
