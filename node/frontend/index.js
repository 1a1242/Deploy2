//import myfun from './fun';

const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json())
app.use(cors())

const URI = "mongodb+srv://19wh1a1242:Sriya226@cluster0.gwriz.mongodb.net/sample_analytics?retryWrites=true&w=majority"
//const url = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const listingsAndReviews = require('./model/listingsAndReviews');
const accounts = require('./model/accounts');
const User = require('./model/User');

try{
    mongoose.connect(
    URI, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {console.log(" Mongoose is connected")
            // console.log(client)
});
    }catch(e){
        console.log("ERROR!");
    }
let alldata;

app.get("/api/info", (req, res)=>{
    // console.log(alldata)
    // console.log("in heree")
    try{
        return res.send({success: true, alldata: alldata})
    }catch(exception){
        return res.send({success: false});
    }
})

setTimeout(async()=>{
    // const data = mongoose.connection;
    // console.log(data.models);
    alldata = await accounts.find();
    console.log(alldata)

}, 5000)

app.get("/", (req, res)=>{
    res.send({success: true, msg: "Hello World"});
})

app.listen(3000, ()=>{
    console.log("Server started on 3000")
})

// const express = require('express')
// const app = express()

// const mclient = require('mongodb').MongoClient;
// const dburl="mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// let dbObj;

// mclient.connect(dburl,(err,dbclient)=>{
//     if(err){
//         console.log("db error");
//     }
//     else {
//          dbObj = dbclient.db();
//          console.log(dbObj);
//     }
// })


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// //console.log(dbObj.myFirstDatabase)

// app.listen(3000)
//app.use(cors())