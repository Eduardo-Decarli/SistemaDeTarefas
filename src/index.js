const express = require('express')
const bodyParser = require('body-parser')
const User = require('./model/user')
const path = require('path')
const app = express();

//Servir arquivos estáticos (css, imagens, etc...)
app.use(express.static(path.join(__dirname + '/view')))

//config Body Parser
app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/view/login.html`);
})

app.post('/menu', function(req, res){
    const user = new User.User(req.body.name, req.body.email, req.body.password)
    user.registerUser()
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