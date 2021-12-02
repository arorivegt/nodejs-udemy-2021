const DEADPOOL = {
    nombre : "Wade",
    apellido : "Winston",
    poder: "Regeneracion",
    edad: 50,
    getNOmbre : function (){
        return `${this.nombre} ${this.apellido}`
    }
}

//const nombre = DEADPOOL.nombre;
//const apellido = DEADPOOL.apellido;
//const poder = DEADPOOL.poder;


const {nombre, apellido, poder, edad = 0} = DEADPOOL;
console.log(nombre, apellido, poder,edad);

function imprimirInfoHeroe({nombre, apellido, poder, edad = 0}){
    console.log(nombre, apellido, poder,edad);
}

imprimirInfoHeroe(DEADPOOL);

const MORE_HEROES = ['heroe1', 'heroe2', 'heroe3'];

const [h1, h2, h3] = MORE_HEROES;
console.log(h1,h2,h3);

const [, , heroe3] = MORE_HEROES;
console.log(heroe3);
