const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()
const connectdb=require('./config/dbconnect')
connectdb()
app.use("/api",require("./routes/users"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var createManyPeople = function(arrayOfPeople, done) {
    Model.create(arrayOfPeople, (err, data) => {
      if(err) {
         done(err); 
      }
    done(null, data);
    }) 
};