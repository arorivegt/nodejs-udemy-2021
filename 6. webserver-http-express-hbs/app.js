const http = require('http');

// req => the requirement of the user
// res => the response of our server to give our user an answer
http.createServer( ( req, res ) => {
    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );

console.log('Listening to port 8080');