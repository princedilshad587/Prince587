const fs = require("fs");
module.exports.config = {
	name: "friendship1199",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "friendship1199",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Friendship1199")==0 || event.body.indexOf("friendship1199")==0 || event.body.indexOf("Friend ship1199")==0 || event.body.indexOf("friend1199")==0) {
		var msg = {
				body: "So sweet friendship 👫",
				attachment: fs.createReadStream(__dirname + `/cache/fr.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💛", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }