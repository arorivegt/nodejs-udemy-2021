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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)
    if(empleado){
        callback(null, empleado) //enviar un null de que no hay error
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario 
    //? al poner el signo de interrogacion, me indica que si existe lo que deuvelve el find realice lo demas
    if(salario){
        callback(null, salario) //enviar un null de que no hay error
    }else{
        callback(`Salario con id ${id} no existe`)
    }
}

getEmpleado(2, (err, empleado) => { 
    //envio error, y empleado para obtener del callback el empleado y 
    //si hay un null el err interpretara que no hay error
    if(err){
        console.log('ERROR');
        return console.log(err);
    }
    console.log(empleado)
});

getSalario(2, (err, salario) => { 
    //envio error, y empleado para obtener del callback el empleado y 
    //si hay un null el err interpretara que no hay error
    if(err){
        console.log('ERROR');
        return console.log(err);
    }
    console.log(salario)
});

const id = 3;
getEmpleado(id, (err, empleado) => { 
    //envio error, y empleado para obtener del callback el empleado y 
    //si hay un null el err interpretara que no hay error
    if(err){
        console.log('ERROR');
        return console.log(err);
    }

    getSalario(id, (err, salario) => { 
        //envio error, y empleado para obtener del callback el empleado y 
        //si hay un null el err interpretara que no hay error
        if(err){
            console.log('ERROR');
            return console.log(err);
        }
        console.log(salario)
        console.log('El empleado',empleado.nombre, 'tiene un salario de:',salario)
    });

});