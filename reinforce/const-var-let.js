var nombre = "Spiderman" //creacion de variable de forma global, esto ya no se debe usar en nuevas versiones por fallos que se pueden dar
let apellido = "home" //creacion de variable de forma global
const OTRO_APELLIDO = "IRON MAN"; //no se pueden modificar, en objetos hay unas excepciones, pero eso depende de las funciones a usar

if(true){
    var nombre = "magnento";
    let apellido = "magnento"; // creacion de variable, pero lo tomo como otra variable
    console.log(apellido);
}
console.log(nombre);
console.log(apellido);
console.log(OTRO_APELLIDO);