require('colors');
const { inquirerMenu, pause, readInput} = require('./helpers/inquire');
const { saveData, readData } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async() => {

    let opt = '';
    const tasks = new Tasks();
    const taskData = readData();

    if ( taskData ){
        tasks.uploadTaskFromArray( taskData );
    }

    do {
        opt = await inquirerMenu();
        switch (opt){
            case '1':
                const description = await readInput('Description: '.white);
                tasks.createTask(description);
            break;
            case '2':
                tasks.showTasks();
                break;

        }

        saveData(tasks.listTask);
        await pause();
    }while( opt !== '0')
    
}

main();