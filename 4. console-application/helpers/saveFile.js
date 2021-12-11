const fs = require('fs');

const file = './db/data.json';

const saveData = ( data ) => {
    fs.writeFileSync(file, JSON.stringify(data),err => {
        throw err;
    });
}

const readData = () => {
    if( !fs.existsSync(file) ){
        return null;
    }

    const info = fs.readFileSync( file, { encoding: 'utf-8' } );
    return JSON.parse(info);
}

module.exports = {
    saveData,
    readData
    
}