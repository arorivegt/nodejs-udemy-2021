const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message : "What do you wanna do?".white,
        choices: [
            { 
                value: '1',
                name: `${'1'.white}. Create Task`
            },
            { 
                value: '2',
                name: `${'2'.white}. List Task`
            },
            { 
                value: '3',
                name: `${'3'.white}. List Task Complete`
            },
            { 
                value: '4',
                name: `${'4'.white}. List Task Incomplete'`
            },
            { 
                value: '5',
                name: `${'5'.white}. Complete Task(s)`
            },
            { 
                value: '6',
                name: `${'6'.white}. Delete Task`
            },
            { 
                value: '0',
                name: `${'0'.white}. Exit`
            }
        ]
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('========================='.white);
    console.log('    Select the option    '.green);
    console.log('=========================\n'.white);

    const { option } = await inquirer.prompt(menuOptions);
    return option;
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.blue}: to continue`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question)
}

const readInput = async ( message ) => {
    
    const question = [
        {
            type: 'input',
            name: 'description',
            message,  /// I receive the variable called in ECMAScript WE can transform this message : message to that message only
            validate ( value ){
                if (value.length === 0 ){
                    return "Please select a valid value ".red
                }
                return true;
            }
        }
    ];

    // I use destructuring
    const { description } = await inquirer.prompt(question);
    return description;
}


const listTaskDeleted = async ( tasks = [] ) => {

    const choices = tasks.map( (task , i) => {
        const idx = `${i + 1}.`.green ;
        return {
            value: task.id,
            name: `${ idx } ${ task.description}`
        }
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message : "Select the task to delete?".white,
            choices // => choices : choices ===> choices
        }
    ]


    const { id } = await inquirer.prompt(questions);

    return id;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTaskDeleted
}