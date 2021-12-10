const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message : "What do you wanna do?",
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('========================='.green);
    console.log('    Select the option    '.green);
    console.log('=========================\n'.green);

    await inquirer.prompt(menuOptions);
}



module.exports = {
    inquirerMenu
}