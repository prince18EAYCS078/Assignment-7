const express = require('express');
 const app = express();

 //setting

 app.set('port',process.env.PORT ||3000);

 //middleware
 app.use(express.json());
 app.get('/', (req,res) => {
    res.send("hello world from nodejs express")
 });

 app.listen(app.get('port'),() =>{
    console.log("start server on port" + app.get('port'));
 });

 const routes = require('./routes')
 app.use('/test', routes);