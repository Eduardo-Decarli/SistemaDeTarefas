const db = require('./DB')

const userModel = db.sequelize.define('Users', {
    name: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
})

class User {
    constructor(name, email, password) {
        this.name = name,
        this.email = email,
        this.password = password
    }

    registerUser() {
        userModel.create({
            name: this.name,
            email: this.email,
            password: this.password
        })
    }
}

/*
user.sync({ force: true }).then(function () {
    console.log('Tabela Criada com sucesso')
}).catch(function (error) {
    console.log('Houve um erro: ' + error)
})
*/

module.exports = {
    User: User,
    userModel: userModel
}