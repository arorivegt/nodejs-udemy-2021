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

    uploadTaskFromArray( tasks = [] ){
        tasks.forEach( task => {
            this._list_task[task.id] = task;
        })
    }

    get listTask(){
        const list = [];
        Object.keys(this._list_task).forEach( key => {
            const task = this._list_task[key];
            list.push(task)
        });
        return list;
    }

    createTask ( desc = ''){
        const task = new Task(desc);
        this._list_task[task.id] = task;
    }

    showTasks(){
        const arrayTasks = this.listTask;
        arrayTasks.forEach( (task , i) => {

            const idx = `${i + 1}`.green;
            const { description, date_complete } = task;
            const status = ( date_complete ) 
                                ? 'Complete'.green
                                : 'Pending'.red;

            console.log(` ${ idx } ${ description } :: ${ status }`);
        });
    }
}

module.exports = Tasks;