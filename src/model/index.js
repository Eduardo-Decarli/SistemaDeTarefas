let http = require('http');
let fs = require('fs');

//Cria o servidor
try{
http.createServer(function(req, res) {
    fs.readFile('../view/register.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        res.end();
    })
}).listen(8080);
}catch(x){
    console.log(x)
}