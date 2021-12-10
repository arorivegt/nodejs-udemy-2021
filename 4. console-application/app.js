require('colors');
const { showMenu, pause4, pause} = require('./helpers/messages');

const main = async() => {
    console.log('Hola mundo'.red)

    let opt = '';

    do {
        opt = await showMenu();
        console.log({opt});
         if (opt !== '0') await pause();
    }while( opt !== '0')
    
}

main();