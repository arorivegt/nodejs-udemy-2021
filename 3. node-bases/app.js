
const { createFile } = require('./helpers/multiply');

//limpiar consola
console.clear();

const base = 3;

createFile(base)
.then( msj => console.log(msj))
.catch( err => console.log(err));
