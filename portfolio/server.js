const express = require("express");
const path = require('path');
const bodyParse = require("body-parser");
const morgan = require("morgan");
const customDomainReroute = require('@turinggroup/serverless-express-custom-domain-middleware').customDomainReroute

//Https and http setup
var fs = require('fs');
var http = require('http');
var https = require('https');
const credentials = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

const app = express();

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


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const port = process.env.PORT || 3000;
httpServer.listen(port, () => console.log("Running http Server at " + port));
httpsServer.listen(port, () => console.log("Running https Server at " + port));