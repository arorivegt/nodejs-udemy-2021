const Task = require("./task");

/**
 * _list_task
 */
class Tasks {
    //I create an object
    _list_task = {}; 

    constructor(){
        this._list_task = {};
    }

    createTask ( desc = ''){
        const task = new Task(desc);
        this._list_task[task.id] = task;
    }
}

module.exports = Tasks;