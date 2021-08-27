import express = require("express");

const app = express();
const port = 8080;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("ㅎㅇㅎㅇ");
})

const dbAddress = "mongodb+srv://MGdb:1234@cluster0.l73ly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbAddress)
  .then(() => console.log("MongoDB Connected"))
  .catch((err : any) => console.log(err));

app.listen(port,()=>console.log("start"));