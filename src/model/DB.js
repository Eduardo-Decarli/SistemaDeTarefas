const Sequelize = require('sequelize');
const sql = new Sequelize('taskController', 'root', '2004', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sql
}