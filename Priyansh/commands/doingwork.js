module.exports.config = {
  name: "doingwork",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam but fixed by Dilshad(ind time)",
  description: "doin work gửi sticker",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "what are you doing",
    "what r u doing",
    "what doing"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi4"] == "undefined", thread["hi4"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "", 
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Karachi ').format('HHmm');
    let session = (
    hours > 0001 && hours <= 200 ? "I am eating Breakfast" : 
    hours > 201 && hours <= 300 ? "I am working little 😊" :
    hours > 301 && hours <= 700 ? "😘I am take rest 😍😍 " :
    hours > 701 && hours <= 1200 ? "I am walking and also reply you" : 
    hours > 1201 && hours <= 1600 ? "I am chatting with you" : 
    hours > 1601 && hours <= 1800 ? "I am take rest ☺️😊" : 
    hours > 1801 && hours <= 2100 ? "I am try to sleep 😘😘" : 
    hours > 2101 && hours <= 2400 ? "I'm going sleep" : 
    "🥱🥱");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `💝💝Hey ${name}, ❤️❤️ ${session}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}