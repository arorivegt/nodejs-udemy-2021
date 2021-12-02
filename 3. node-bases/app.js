
const { createFile } = require('./helpers/multiply');

//limpiar consola
console.clear();

const base = 5;

createFile(base)
.then( msj => console.log(msj))
.catch( err => console.log("ERROR",err));
