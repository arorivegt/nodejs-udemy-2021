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
        //usually to get something
        this.app.get('/api', function (req, res) {
            //res.status(200).json({ add status to return
            res.json({
                ok : true,
                message: "API get"
            })
        })

        //usually to update something
        this.app.put('/api', function (req, res) {
            res.json({
                ok : true,
                message: "put get"
            })
        })

        //usually to create something
        this.app.post('/api', function (req, res) {
            res.json({
                ok : true,
                message: "post get"
            })
        })

        ///usually to delete or change status to something
        this.app.delete('/api', function (req, res) {
            res.json({
                ok : true,
                message: "delete get"
            })
        })


        this.app.patch('/api', function (req, res) {
            res.json({
                ok : true,
                message: "patch get"
            })
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Listening on port',this.port)
        })
    }
}

module.exports = Server;