module.exports.config = {
	name: "zalgo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝",
	description: "Converts your text to Zalgo",
	commandCategory: "game",
	depndencies: {"to-zalgo":""},
	usages: "zalgo <text>",
	cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
  const Zalgo = require("to-zalgo");
  return api.sendMessage(Zalgo(args.join(" ")), event.threadID, event.messageID);
}