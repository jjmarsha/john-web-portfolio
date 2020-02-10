const express = require("express");
const app = express();
const path = require('path');
const bodyParse = require("body-parser");
const morgan = require("morgan");
const customDomainReroute = require('@turinggroup/serverless-express-custom-domain-middleware').customDomainReroute

//MiddleWare
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(morgan("dev"));
app.use(customDomainReroute);

app.use(express.static(path.join(__dirname,'build')));

//Prevent CORS And Allow PUT,POST,DELETE,PATCH,GET
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "*");
    return res.status(200).json({});
  }
  next();
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build','index.html'));
})


const port = process.env.PORT || 80;
app.listen(port, "0.0.0.0", () => console.log("Running Server at " + port));