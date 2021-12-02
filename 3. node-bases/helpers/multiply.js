const fs = require('fs')

const createFile = async (base = 5) => {


    return new Promise((resolve, reject) => {
        let salida = '';
    
        console.log("=========================");
        console.log(`     Table ${base}       `);
        console.log("=========================");
    
        for(let i = 1; i <= 10; i++){
            salida +=`${base} x ${i} = ${base*i} \n`;
        }
        console.log(salida);
    
        //sino le especifico el path completo, creara el archivo en la misma carpeta del app.js
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`the table base ${base} has been created`)
    });

}

module.exports = {
    createFile // createFile: createFile ==> es igual a createFile nombre de funcion a exportar
}