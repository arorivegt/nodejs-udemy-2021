//luego de 100 segundos se ejecuta el console.log
setTimeout(function(){
    console.log('hola mundo');
}, 1000);

const getUsuario = (id, callback) => {
    const usuario = {
        id, //es igual a decir id : id porque tienen el mimo nombre de los parametros de la funcion
        nombre: "Jose"
    }

    setTimeout(function(){
        callback(usuario);
    }, 1000);
}

//envio un callback
getUsuario(10, () => {
    console.log('hola mundo callback')
});


getUsuario(10, (usuario) => {
    console.log(usuario)
});