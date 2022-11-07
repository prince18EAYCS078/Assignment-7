//import sequelize

var Sequelize = require('sequelize');

//import connection database

var sequelize = require('../database');

var Customers = sequelize.define('customers',{
   
     id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,

     },

     name: Sequelize.STRING,
     email: Sequelize.STRING,
     address: Sequelize.STRING,
     phone: Sequelize.STRING,
});

module.exports = Customers;