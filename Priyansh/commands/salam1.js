const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "salam",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Prince Dilshad ",
  description: "salam",
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

  var tl = ["🌹Walaikuum Salaam Warahmatullah Wabarokatuh🌹"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("salamualaikum") == 0 || (event.body.indexOf("sslam") == 0)) {
    var msg = {
      body: ` \n\n \n   ${rand} \n\n`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }