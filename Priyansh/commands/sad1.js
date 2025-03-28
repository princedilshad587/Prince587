const fs = require("fs");
module.exports.config = {
  name: "sad1",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("sick") || react.includes("Sick") || react.includes("Fever") || react.includes("fever") || react.includes("cough") || react.includes("Cough") || react.includes("Coughing") || react.includes("coughing") || react.includes("sneeze") || react.includes("Sneeze") || react.includes("Sneezing") || react.includes("sneezing") || react.includes("headache") || react.includes("Headache") || react.includes("i am sick") || react.includes("I am sick") || react.includes("Flu") || react.includes("flu") || react.includes("influenza") || react.includes("Influenza") || react.includes("Disease") || react.includes("disease") || react.includes("Malaria") || react.includes(":(") || react.includes("malaria") || react.includes("bp") || react.includes("depress") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("depress")) {
    var msg = {
        body: "Take Care your Health and Take medicine 💊 at time,Inshallah you will be fine soon🙌"
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }