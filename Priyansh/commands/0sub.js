const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙣𝙘𝙚 𝘿𝙞𝙡𝙨𝙝𝙖𝙙", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Dilshad")==0 || event.body.indexOf("sub")==0 || event.body.indexOf("subscribe")==0 || event.body.indexOf("Prince Dilshad")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On Telegram  Username 👉 @Princedilshad😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/sub.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }