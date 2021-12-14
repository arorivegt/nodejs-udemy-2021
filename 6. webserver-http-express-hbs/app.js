
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT; //I need to change this if I want to deployed my app to a hosting for this I use mi .env

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


//serve static content
app.use( express.static('public'));
 
app.get('/', (req, res)=> {
  res.render('home',{
    title: 'Bootstrap Template - NodeJS',
    name: 'Anibal J. Rodriguez'
  }); //we use hsb to render my webpage
  //res.sendFile(__dirname + '/public/index.html');
})

app.get('/hello-world', (req, res) => {
  res.send('Hello World in another route')
})

// this is a comodind (*), if user is going to go to another pages, we can show an error or something else
app.get('*', (req, res)  => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})