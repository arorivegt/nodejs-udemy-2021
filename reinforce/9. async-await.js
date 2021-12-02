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

const getInfoUsuario = async(id) => { //lo vuelve una funcion asincronas
    try{
        const empleado = await getEmpleado(id); //await es como si fuera un .then, esperando la respuesta de la funcion
        const salario = await getSalario(id); //await solo va en funciones asincronas
        return `El empleado ${empleado} tiene un salario de: ${salario}`;
    }catch(error){
        throw error; //lanzo un throw para que se dispare la excepsion, si en vez de eso
        // realizo un return error, el mensaje va hacia el then y no hacia el catch, con el
        // throw si podemos manejar el error al catch
    }
}

const id = 122;
getInfoUsuario(id)
    .then( msj => console.log(msj))
    .catch( err => console.log(err))
