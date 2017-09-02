'use strict';
var intentHandler = {};
var prompts = require('./prompts');
var rp = require('request-promise');

intentHandler.launch = function(request, response) {
  var prompt = prompts.launch.prompt;
  var reprompt = prompts.launch.reprompt;

  response.say(prompt).reprompt(reprompt).shouldEndSession(false);
}

intentHandler.ChannelChanger = function(req, res) {
  var channelName = req.slot("Channel");

  var options = {
      uri: "https://alasdair333.duckdns.org/alexa",
      method: "POST",
      headers: {'content-type' : 'application/x-www-form-urlencoded'},
      form: {name: channelName,
             key: "3"}
  };

  rp(options).then( function(rpresponse){
      console.log(response);
      res.say(rpresponse.body);
  });
}

module.exports = intentHandler;
