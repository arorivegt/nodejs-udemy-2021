
const express = require('express')
const app = express()
const port = 3000;

app.set('view engine', 'hbs');


//serve static content
app.use( express.static('public'));
 
app.get('/', (req, res)=> {
  res.render('home'); //we use hsb to render my webpage
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