require('colors');
const { inquirerMenu, pause, readInput} = require('./helpers/inquire');
const Tasks = require('./models/tasks');

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();
        switch (opt){
            case '1':
                const description = await readInput('Description: '.white);
                tasks.createTask(description);
            break;
            case '2':
                console.log(tasks._list_task);
                break;

        }
        await pause();
    }while( opt !== '0')
    
}

main();