const empleados = [
    {
        id: 1,
        nombre: "Anibal Rodriguez"
    },
    {
        id: 2,
        nombre: "Anibal jose"
    },
    {
        id: 3,
        nombre: "Anibal Orive"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    }
]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) 
            ? resolve(empleado)
            : reject(`NO existe empleado con id ${id}`)
    });
}


const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario) 
            ? resolve(salario)
            : reject(`NO existe salario con id ${id}`)
    });
}

const id = 233;
//este codigo es mas limpio y entendible, y a diferencia del callbacl-error.js
//manejamos una promesa y devolvemos el resolve y reject para manejar tanto el 
//el resultado como el error 
getEmpleado(id)
    .then( empleado => console.log(empleado))
    .catch( err => console.log(err))


const idSalario = 2;
//este codigo es mas limpio y entendible, y a diferencia del callbacl-error.js
//manejamos una promesa y devolvemos el resolve y reject para manejar tanto el 
//el resultado como el error 
getSalario(idSalario)
    .then( salario => console.log(salario))
    .catch( err => console.log(err))

const idEmp = 2;
const idSal = 2;
getEmpleado(idEmp)
.then( empleado => {
    getSalario(idSal)
    .then( salario => console.log(`El salario de ${empleado} es de ${salario}`))
    .catch( err => console.log(err))
})
.catch( err => console.log(err))

