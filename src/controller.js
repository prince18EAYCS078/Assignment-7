const controller = {}

//import models
var Customers = require('./models/Customers');

const {Op} = require("sequelize"); 

controller.index = (req, res) =>{
     const data = {
        name: "john smith",
        age: 20,
        city: "london"

     }
     res.json(data);
}

controller.list = async (req, res) => {
    try{
        const response = await Customers.findAll()
        .then(function(data){
            const res = { success:true, message: "load successsfull", data: data}
             return res;
        })

        .catch(error =>{
            const res = { success: false, error: error}
            return res;
        })
        return res.json(response);

    }
    catch(e){
        console.log("Error controller.list");
        console.log(e)
    }
}

controller.create = async ( req, res ) =>{
    try {
        const response = await Customers.create({
            name: "john",
            email: "john@email.com",
            address: "delhi",
            phone: "90286439"
        })
        .then(function(data){
            const res = {
                success: true,
                 message: "created successful", 
                 data:data
            }
            return res;
        })
        .catch(error =>{
            const res = { Success: false, error: error}
            return res;
        })

        res.json(response);

    } catch (e) {
        console.log(e)
    }
}


controller.update = async (req, res) => {
    try {
        

        const idCustomer = 4;
        const response = await Customers.update({
            name: "john",
            email: "john@email.com",
            address: "delhi",
            phone: "90286439"
        },{
            where: {
                id: idCustomer
            }
        }
        ) 
        .then(function(data){
            const res = {
                success: true,
                 message: "update successful", 
                 data:data
            }
            return res;
        })
        .catch(error =>{
            const res = { Success: false, error: error}
            return res;
        })

        res.json(response);

    } catch (e) {
        console.log(e)
    }
}


controller.get = async(req, res) =>{

    try {
         
         const { id } = req.params;

         const response = await Customers.findAll({
            where: {id: id}
         })
         .then(function(data){
            const res = { success: true,
            data: data}
             return res; 
        })

        .catch(error =>{
            const res = {success: false,
            error: error
        }
        return res;
        })

        res.json(response);

    } catch (e) {
        console.log(e)
    }
}

  controller.delete = async (req, res) =>{
    try {

        const {id} = req.params;
        const response = await Customers.destroy({
            where: {id: id}
        })
        .then(function(data){
            const res = { success: true, 
            data: data,
            message: "deleted succesful"}

            return res;
        })

        .catch(error =>{
            const res = {success: false,
            error:error}
            return res;
        });

        res.json(response);

        
    } catch (e) {
        console.log(e)
    }
  }
module.exports = controller;