const fs = require('fs')
var colors = require('colors');

//al tener el async ya el metodo defecto envia una promesa
const createFile = async (base = 5, listar = false) => {

        try{
            let salida = '';
        
            for(let i = 1; i <= 10; i++){
                salida +=`${base} ${'x'.blue} ${i} = ${base*i} \n`;
            }
            if(listar){
                console.log("=========================".red);
                console.log(`     Table ${colors.blue(base)}       `);
                console.log("=========================".red);
                console.log(salida.white);
            }
        
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