const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// your code goes here
app.get("/", function(req, res) {
  res.send("Hello World!");
});

// function responseOutput(status, message, sum){
//     return {
//         status: status,
//         message : message,
//         sum : sum
//      }
// }
//ADDITION
app.get("/add", function(req, res) {
  let reqPath = path.join(__dirname , '..', 'views','add.html');
  res.sendFile(reqPath);
});

app.post("/add", function (req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    let flag = 0;
    if (isNaN(number1)) {
      flag = 1;
    }
    if (isNaN(number2)) {
      flag = 1;
    }
    if((number1+number2)>1000000)
    {
      flag = 2;
    }
    if(flag == 0)
    {
	     var result = number1 + number2;
       // return res.json(responseOutput("success", "the sum of given two numbers", result));
       return res.json({
         status: "success",
         message: "the sum of given two numbers",
         sum: result
       });
    }
    else if(flag == 1)
    {
      // return res.json(responseOutput("error", "Invalid data types", result));
      return res.json({
        status: "error",
        message: "Invalid data types",
        sum: result
      });
    }
    else {
      // return res.json(responseOutput("failure", "Overflow", result));
      return res.json({
        status: "failure",
        message: "Overflow",
        sum: result
      });
    }
});

//SUBSTRACTION
app.get("/sub", function(req, res) {
  let reqPath = path.join(__dirname , '..', 'views','substract.html');
  res.sendFile(reqPath);
});

app.post("/sub", function (req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    let flag = 0;
    if (isNaN(number1)) {
        flag = 1;
    }
    if (isNaN(number2)) {
      flag = 1;
    }
    if((number1 - number2)<-1000000)
    {
      flag = 2;
    }
    if(flag == 0)
    {
	     var result = number1 - number2;
       // return res.json(responseOutput("success", "the difference of given two numbers", result));
       return res.json({
         status: "success",
         message: "the difference of given two numbers",
         difference: result
       });
    }
    else if(flag == 1)
    {
      // return res.json(responseOutput("error", "Invalid data types", result));
      return res.json({
        status: "error",
        message: "Invalid data types",
        difference: result
      });
    }
    else {
      // return res.json(responseOutput("failure", "Underflow", result));
      return res.json({
        status: "failure",
        message: "Underflow",
        difference: result
      });
    }
});

//MULTIPLICATION
app.get("/multiply", function(req, res) {
  let reqPath = path.join(__dirname , '..', 'views','multiply.html');
  res.sendFile(reqPath);
});

app.post("/multiply", function (req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    let flag = 0;
    if (isNaN(number1)) {
      flag = 1;
    }
    if (isNaN(number2)) {
      flag = 1;
    }
    if((number1 * number2)>1000000)
    {
      flag = 2;
    }
    if(flag == 0)
    {
	     var result = number1 * number2;
       //return res.json(responseOutput("success", "The product of given numbers", result));
       return res.json({
         status: "success",
         message: "The product of given numbers",
         result: result
       });
    }
    else if (flag == 1) {
      // return res.json(responseOutput("error", "Invalid data types", result));
      return res.json({
        status: "error",
        message: "Invalid data types",
        result: result
      });
    }
    else
    {
      //return res.json(responseOutput("failure", "Overflow", result));
      return res.json({
        status: "failure",
        message: "Overflow",
        result: result
      });
    }
});

//DIVISION
app.get("/divide", function(req, res) {
  let reqPath = path.join(__dirname , '..', 'views','divide.html');
  res.sendFile(reqPath);
});

app.post("/divide", function (req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    let flag = 0;
    if (isNaN(number1)) {
      flag = 1;
    }
    if (isNaN(number2)) {
      flag = 1;
    }
    if (number2 == 0) {
      flag = 2;
    }
    if(flag == 0)
    {
	     var result = number1 / number2;
       //return res.json(responseOutput("success", "The division of given numbers", result));
       return res.json({
         status: "success",
         message: "The division of given numbers",
         result: result
       });
    }
    else if(flag == 1)
    {
      //return res.json(responseOutput("error", "Invalid data types", result));
      return res.json({
        status: "error",
        message: "Invalid data types",
        result: result
      });
    }
    else {
      //return res.json(responseOutput("failure", "Cannot divide by zero", result));
      return res.json({
        status: "failure",
        message: "Cannot divide by zero",
        result: result
      });
    }
});

// here

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
if(!module.parent){
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
}
module.exports = app;
