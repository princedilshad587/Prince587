module.exports.config = {
  name: "Asslam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam but fixed by Dilshad(ind time)",
  description: "Salam",
  commandCategory: "Salam",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "السلام علیکم",
    "السلام",
    "السلام عليڪم",
    "asslam",
    "assalam alykum",
    "assalamu",
    "salam",
    "असलमुअलाईकुम",
    "আসসালামুয়ালাইকুম",
    "อัสสลามมุอะลัยกุม",
    "阿萨拉穆阿拉伊库姆",
    "Esselamu aleyküm",               "asslam alaykum",
    "assalamualaikum"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["Assl"] == "undefined", thread["Assl"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
     "", "", "", "", "", "", "", "", "", "", "", "", "", 
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Karachi ').format('HHmm');
    let session = (
    hours > 0001 && hours <= 200 ? "Walaikuum Salaam " : 
    hours > 201 && hours <= 300 ? "Walikuum-e-Salam" :
    hours > 301 && hours <= 700 ? "Walaikuum Salam" :
    hours > 701 && hours <= 1200 ? " واليكم السلام" : 
    hours > 1201 && hours <= 1600 ? "وعليكم السلام" : 
    hours > 1601 && hours <= 1800 ? "Walikuum-e-Salam Warahmatullah Wabarokatuh" : 
    hours > 1801 && hours <= 2100 ? "Walaikuum Salaam Warahmatullah Wabarokatuh" : 
    hours > 2101 && hours <= 2400 ? "Walaikuum Salaam " : 
    "Walikuum-e-Salam");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `💝💝 ${name}, ❤️❤️ ${session}`, mentions}
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