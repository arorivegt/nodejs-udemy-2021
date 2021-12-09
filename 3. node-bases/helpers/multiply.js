const fs = require('fs')
var colors = require('colors');

//al tener el async ya el metodo defecto envia una promesa
const createFile = async (base = 5, listar = false, hasta = 10) => {

        try{
            let salida = '';
            let consola = '';
        
            for(let i = 1; i <= hasta; i++){
                consola +=`${base} ${'x'.blue} ${i} = ${base*i} \n`;
                salida +=`${base} x ${i} = ${base*i} \n`;
            }
            if(listar){
                console.log("=========================".rainbow);
                console.log(`     Table ${colors.blue(base)}       `);
                console.log("=========================".rainbow);
                console.log(consola);
            }
        
            //sino le especifico el path completo, creara el archivo en la misma carpeta del app.js
            fs.writeFileSync(`./files/tabla-${base}.txt`, salida);
            return `the table base ${base} has been created`
        }catch( err ) {
            throw err
        }

}

module.exports = {
    createFile // createFile: createFile ==> es igual a createFile nombre de funcion a exportar
}