const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message : "What do you wanna do?".white,
        choices: [
            { 
                value: 1,
                name: `${'1'.white}. Search City`
            },
            { 
                value: 2,
                name: `${'2'.white}. History`
            },
            { 
                value: 0,
                name: `${'0'.white}. Exit`
            }
        ]
    }
]

const menu = async() => {

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


const listPlaces = async ( places = [] ) => {

    const choices = places.map( (place , i) => {

        const idx = `${i + 1}.`.green ;

        return {
            value: place.id,
            name: `${ idx } ${ place.name }`
        }
    })

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancel `
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message : "Select place".white,
            choices // => choices : choices ===> choices
        }
    ]


    const { id } = await inquirer.prompt(question);

    return id;
}

const confirmDelete = async ( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}



const showListCheckList = async ( tasks = [] ) => {

    const choices = tasks.map( (task , i) => {
        const idx = `${i + 1}.`.green ;
        return {
            value: task.id,
            name: `${ idx } ${ task.description}`,
            checked: ( task.date_complete ) ? true : false
        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message : "Select more than one".white,
            choices // => choices : choices ===> choices
        }
    ]


    const { ids } = await inquirer.prompt(question);

    return ids;
}

module.exports = {
    menu,
    pause,
    readInput,
    listPlaces,
    confirmDelete,
    showListCheckList
}