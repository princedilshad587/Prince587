const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '──── •♥️• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ 𝐆𝐨 𝐭𝐨 𝐬𝐥𝐞𝐞𝐩, 𝐠𝐨𝐨𝐝𝐧𝐢𝐠𝐡𝐭 🥀 ──── •♥️• ────' },
    { time: '1:00 AM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ 𝐘𝐨𝐮 𝐫𝐞 𝐬𝐭𝐢𝐥𝐥 𝐋𝐚𝐧𝐝𝐢 𝐥𝐚𝐧𝐝𝐢 😁 𝐠𝐨 𝐭𝐨 𝐬𝐥𝐞𝐞𝐩 🥱😘 ──── •💙• ────' },
    { time: '2:00 AM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐧𝐨𝐭 𝐬𝐥𝐞𝐩𝐭 𝐲𝐞𝐭 😳 ──── •💙• ────' },
    { time: '3:00 AM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ 𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞🌃 ──── •💙• ────' },
    { time: '4:00 AM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞 🌃 ──── •💙• ────' },
    { time: '5:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢😹 ──── •💜• ────' },
    { time: '6:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳ 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐀𝐥𝐚𝐢𝐤𝐮𝐦 ❤️🥀 💖 ──── •💜• ────' },
    { time: '7:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝐀𝐰𝐚𝐤𝐞 𝐮𝐩 𝐧𝐨𝐰🥰 ──── •💜• ────' },
    { time: '8:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩?😵 ──── •💜• ────' },
    { time: '9:00 AM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳𝐍𝐨𝐰 𝐡𝐚𝐯𝐞 𝐲𝐨𝐮𝐫 𝐛𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭, 𝐁𝐚𝐛𝐲🙈 ──── •💙• ────' },
    { time: '10:00 AM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ 𝐵𝒶𝒷𝓎 𝒶𝓇𝑒 𝒷𝓊𝓈𝓎 𝒾𝓃 𝓉𝒽𝑒 𝒾𝓃𝒷𝑜𝓍.🙀 ──── •💙• ────' },
    { time: '11:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ ʀᴇᴍᴇᴍʙᴇʀ ᴍᴇ ᴛᴏᴏ😻 ──── •💙• ────' },
    { time: '12:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞 𝐇𝐨𝐰 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 ──── •💙• ────' },
    { time: '1:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳ 𝐆𝐨 𝐭𝐨 𝐡𝐚𝐯𝐞 𝐥𝐮𝐧𝐜𝐡😇 ──── •💙• ────' },
    { time: '2:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐒𝐚𝐲 𝐢𝐭 𝐩𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝 𝐦𝐲 𝐣𝐚𝐚𝐚𝐧 💖😇 ──── •💙• ────' },
    { time: '3:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ Now get some rest😘 ──── •💙• ────' },
    { time: '4:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ It is very hot here now. ──── •💙• ────' },
    { time: '5:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ 𝐀𝐥𝐰𝐚𝐲𝐬 𝐛𝐞 𝐡𝐚𝐩𝐩𝐲 𝐢𝐧 𝐚𝐧𝐲 𝐬𝐢𝐭𝐮𝐚𝐭𝐢𝐨𝐧 😇 ──── •💙• ────' },
    { time: '6:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ 𝐁𝐚𝐛𝐲 𝐈 𝐦𝐢𝐬𝐬 𝐲𝐨𝐮 💖 ──── •💙• ────' },
    { time: '7:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳ 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐚𝐥𝐚𝐢𝐤𝐮𝐦 💞 ──── •💙• ────' },
    { time: '8:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ ★彡[ʜᴀᴠᴇ ʏᴏᴜ ʜᴀᴅ ᴅɪɴɴᴇʀ]彡★😋 ──── •💙• ────' },
    { time: '9:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ 𝐌𝐞𝐫𝐞 𝐂𝐮𝐭𝐞 𝐁𝐚𝐛𝐲 💞 ──── •💙• ────' },
    { time: '10:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐀𝐥𝐰𝐚𝐲𝐬 𝐛𝐞 𝐡𝐚𝐩𝐩𝐲 𝐚𝐧𝐝 𝐬𝐦𝐢𝐥𝐞 ☺️ ──── •💙• ────' },
    { time: '11:00 PM', message: '──── •💙• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳ 𝐁𝐛𝐲 𝐇𝐚𝐯𝐞 𝐲𝐨𝐮 𝐞𝐚𝐭𝐞𝐧 𝐟𝐨𝐨𝐝𝐬? ──── •💙• ────' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Karachi').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
