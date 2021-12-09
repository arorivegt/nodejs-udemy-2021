const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: "Is the base of multiply"
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption:true,
        default: false
    })
    .check((argv,option) => {
        if( isNaN(argv.base)){
            throw 'the base is not a number'
        }
        return true;
    }).argv;

module.exports = argv;