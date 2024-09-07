const Sequelize = require('sequelize');
const sequelize = new Sequelize('taskController', 'root', '2004', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}