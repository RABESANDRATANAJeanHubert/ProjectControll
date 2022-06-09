const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const parse = require('body-parser');


app.get('/status', (req, res) => {
  res.send(
   { 
     message:`Hello welecome`
   }
  )
})
app.post("/register", function (req, res) {
  // const message = "bonjour";
  console.log(req.body);
  res.send(
    { 
      message:`Hello welecome`
    }
   )
  });
app.listen(process.env.PORT || 3000)