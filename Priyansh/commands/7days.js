module.exports.config = {
  name: "7days",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam but fixed by Dilshad(ind time)",
  description: "hi7 gửi sticker",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "happy Sunday",
    "happy monday",                   "happy wednesday",
    "happy tuesday",                  "happy thursday",                 "happy friday",                   "happy weekend",                  "happy sunday",                   "happy saturday"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi7"] == "undefined", thread["hi7"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "", 
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Karachi ').format('HHmm');
    let session = (
    hours > 0001 && hours <= 200 ? "Same too you, Have a nice day 💙" : 
    hours > 201 && hours <= 300 ? "S2U , Have a good day ☺️ 🤍" :
    hours > 301 && hours <= 700 ? "😘 Same too you, Have a wonderful day 😍😍 " :
    hours > 701 && hours <= 1200 ? "Same 2 u, Have a beautiful day ☁️ " : 
    hours > 1201 && hours <= 1600 ? "Same too you, Have a Great day💞" : 
    hours > 1601 && hours <= 1800 ? "Same too you, Have a nice day ☺️😊" : 
    hours > 1801 && hours <= 2100 ? "Same too you, Have a good day😘😘" : 
    hours > 2101 && hours <= 2400 ? "Same too you, Have a nice day 🫦" : 
    "Same too you 🥰");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Hey ${name},  ${session}`, mentions}
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