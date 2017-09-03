'use strict';
var prompts = {};

prompts.launch = {
  prompt: "Welcome, To Change the channel simple say. Alexa, tell changechannel then the Channel Name",
  reprompt: "For instructions on what you can say, please say help me."
}

prompts.channelchanger = {
  changeTo: "Changing Channel to "
}

module.exports = prompts;
