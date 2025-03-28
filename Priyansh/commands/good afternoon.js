const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "good afternoon",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Prince Dilshad ",
  description: "good afternoon",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🌹Good Afternoon too, Did you eat your lunch 😍?"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Good afternoon") == 0 || (event.body.indexOf("Noon") == 0)) {
    var msg = {
      body: ` \n\n \n   ${rand} \n\n`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }