
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;

var fs = require("fs");
var bodyParser = require('body-parser');
var channelList = require('./channelList');
var net = require('net');
var API_KEY = 3;

var tivoIP = "192.168.0.21";
var tivoPort = "31339";

var client = new net.Socket();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/change', function(req,res){
    res.send("OK");
});

app.post('/change', function(req, res){
  var name = req.body.name,
      apiKey = req.body.key;

  console.log("ConnectedL Name: "+name);
  if(API_KEY == apiKey) {
      for(var c in channelList) {
        if(channelList[c].name == name)
        {
          console.log("Found");
          console.log("FORCECH "+ channelList[c].number);
          client.write("FORCECH "+ channelList[c].number+"\r");
          res.send("OK");
          return;
        }
      }
  }
  else {
    console.log("Incorrect API Key");
  }
  res.send("Failed");
});

app.listen(port, function(){
  client.connect(tivoPort, tivoIP, function(){
    console.log('CONNECTED TO: ' + tivoIP + ':' + tivoPort);
  });
  console.log("TiVO controller server started on port: "+port);

});

module.exports = app;
