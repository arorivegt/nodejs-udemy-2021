const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

require('dotenv').config();


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';

        //connect to database
        this.connectDataBase();

        ///Middlewares -> there are a  new funcionality where is execute when we do a request and after the backed do something, 
        //the middlewares do something
        this.middlewares()

        this.routes();
    }


    async connectDataBase(){
        await dbConnection();
    }

    
    middlewares(){

        //CORS
        this.app.use ( cors() );

        //read and parse body
        this.app.use( express.json() );

        //this is the usual structure for a middleware
        //public directory
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.pathUsers, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Listening on port',this.port)
        })
    }
}

module.exports = Server;