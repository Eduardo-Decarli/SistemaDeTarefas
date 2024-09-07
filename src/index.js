const express = require('express')
const path = require('path')
const app = express();

//Servir arquivos estáticos (css, imagens, etc...)
app.use(express.static(path.join(__dirname + '/view')))

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/view/login.html`);
})

const port = 8081
try {
    app.listen(port, function () {
        console.log(`Servidor rodando na porta ${port}`)
    })
}
catch (error) {
    console.log('O servidor não conseguiu se conectar devido o erro: ' + error)
}