module.exports.config = {
  name: "owner",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Prince Dilshad", //don't change the credits please
  description: "Admin and Bot info.",
  commandCategory: "info",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Karachi ").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/f57clbW.gif", 
 "https://i.imgur.com/j4APmX2.gif", "https://i.imgur.com/KeBGRsC.jpg", "https://i.imgur.com/tVh9GOY.jpg"];
var callback = () => api.sendMessage({body:`🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇵🇰


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝 ☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨https://www.facebook.com/dilshad.x87 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 @dilshad_087 \n\n  ====𝗧𝗼 𝗹𝗲𝗮𝗿𝗻 𝗛𝗼𝘄 𝘁𝗼 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔 𝗯𝗼𝘁 === 𝗩𝗶𝘀𝗶𝘁 𝗔𝗻𝗱 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗧𝗼 𝗠𝘆 𝗖𝗵𝗮𝗻𝗻𝗲𝗹✅ 🗡 https://www.youtube.com/@tigerlover
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };