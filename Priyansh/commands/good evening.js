const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "good evening",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Prince Dilshad ",
  description: "good evening",
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

  var tl = ["G͢o͢o͢d͢ e͢v͢e͢n͢i͢n͢g͢ t͢o͢o͢ "];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Good evening") == 0 || (event.body.indexOf("Evening") == 0)) {
    var msg = {
      body: `😍${name}😍,  \n\n『\n   ${rand} 』\n\n🕔🕡🕣`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }