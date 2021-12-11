const { v4 : uuidv4 } = require('uuid');

class Task {
    id = '';
    description = '';
    date_complete = null;

    constructor( description ){
        this.id = uuidv4(); //create a unique identifier
        this.description = description;
    }
}


module.exports = Task