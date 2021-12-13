const http = require('http');

// req => the requirement of the user
// res => the response of our server to give our user an answer
http.createServer( ( req, res ) => {
    console.log(req);

    //res.writeHead(200,{ 'Content-Type': 'text/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lis.csv');
    res.writeHead(200,{ 'Content-Type': 'teaxt/csv'});
    
    /*const person = {
        id: 1,
        name : 'Anibal Rodriguez'
    }
    res.write(JSON.stringify(person));*/

    res.write('id, name\n');
    res.write('1, Anibal\n');
    res.write('2, Jose\n');
    res.write('3, Rodriguez\n');
    res.end();
})
.listen( 8080 );

console.log('Listening to port 8080');