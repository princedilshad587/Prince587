module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝",
	description: "Change your group Emoji",
	commandCategory: "Box", 
	usages: "groupemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("You have not entered Emoji 💩💩", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🔨 The bot successfully changed Emoji to: ${emoji}`, event.threadID, event.messageID));
}