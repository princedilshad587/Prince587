module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝",
    description: "Logout ACC Bot",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
api.sendMessage("Logout ...",event.threadID,event.messageID)
api.logout()
}