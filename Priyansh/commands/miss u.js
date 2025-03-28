module.exports.config = {
  name: "hi5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam but fixed by Dilshad(ind time)",
  description: "hi5 gửi sticker",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
     "I miss you",
     "miss you",
     "Miss you",                       "i miss you",                     "miss u",                         "miss you sweetie",               "miss you sweetie love",
     "I miss u"      
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "", 
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Karachi ').format('HHmm');
    let session = (
    hours > 0001 && hours <= 200 ? "I miss you too my pretty baby 😍💋🤗😘" : 
    hours > 201 && hours <= 300 ? "I miss you too muah 😘 💋" :
    hours > 301 && hours <= 700 ? "😘I Miss You too my sweetie 😍😍 " :
    hours > 701 && hours <= 1200 ? "I miss you too my baby mmmmmmmmmmmmuuuuaaah 😘😘" : 
    hours > 1201 && hours <= 1600 ? "I miss you too my sweetheart 😘💋" : 
    hours > 1601 && hours <= 1800 ? "I miss you too my sweetie love" : 
    hours > 1801 && hours <= 2100 ? "I miss you too my baby mmmmmmmmmmmmuuuuaaah 😘😘" : 
    hours > 2101 && hours <= 2400 ? "i miss you too muah 😘👄" : 
    "miss you too 😙💕😘");
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