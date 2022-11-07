const Sequelize = require('sequelize');
const database = new Sequelize(
    'tutofox', //name database
    'admin',  //user database
    'root', //password database
    {
        host: "localhost",
        dialect: "postgres"

    }
);

database.sync();
module.exports = database