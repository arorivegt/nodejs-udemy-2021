require('colors');
const { inquirerMenu } = require('./helpers/inquire');

const main = async() => {
    console.log('Hola mundo'.red)

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt});
        // if (opt !== '0') await pause();
    }while( opt !== '0')
    
}

main();