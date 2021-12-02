const fs = require('fs')

//al tener el async ya el metodo defecto envia una promesa
const createFile = async (base = 5) => {

        try{
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
            return `the table base ${base} has been created`
        }catch( err ) {
            throw err
        }

}

module.exports = {
    createFile // createFile: createFile ==> es igual a createFile nombre de funcion a exportar
}