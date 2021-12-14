const express = require('express')
require('dotenv').config();


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT;

        ///Middlewares -> there are a  new funcionality where is execute when we do a request and after the backed do something, 
        //the middlewares do something
        this.middlewares()

        this.routes();
    }

    middlewares(){
        //this is the usual structure for a middleware
        //public directory
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.get('/api', function (req, res) {
            res.send('Hello World')
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Listening on port',this.port)
        })
    }
}

module.exports = Server;