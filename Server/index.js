
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;

var stringify = require('json-stringify');

var fs = require("fs");
var bodyParser = require('body-parser');
var channelList = require('./channelList');
var config = require('./config.json');
var net = require('net');

//URL for Tivo documentation on TiVO commands:
// https://www.tivo.com/assets/images/abouttivo/resources/downloads/brochures/TiVo_TCP_Network_Remote_Control_Protocol.pdf

var client = new net.Socket();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  res.send("OK Home");
});

app.get('/change', function(req,res){
    res.send("Failed");
});

app.post('/change', function(req, res){
  var validated = req.get('X-Validated').toString().trim().toLowerCase();
  var issuer = req.get('X-Issuer');

  if(validated === "success")
  {
    var name = req.body.name.trim();

    for(var c in channelList) {
      if(channelList[c].name.toLowerCase() == name.toLowerCase())
      {
        console.log("Found");
        console.log("FORCECH "+ channelList[c].number);
        client.write("FORCECH "+ channelList[c].number+"\r");
        res.send("OK");
        return;
      }
    }

    res.send("Not Found");
    return;
  }
  res.send("Failed\n");
});

app.listen(port, function(){
  client.connect(config.tivo_port, config.tivo_ip, function(){
    console.log('CONNECTED TO: ' + config.tivo_ip + ':' + config.tivo_port);
  });
  console.log("TiVO controller server started on port: "+port);

});

module.exports = app;
