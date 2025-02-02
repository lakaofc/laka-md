const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//👉 Put Your Session Id 🐣 👈කියන එක කපලා අයින් කරලා ඔයාගේ Session id එක දාන්න.

SESSION_ID: process.env.SESSION_ID || "LAKA-MD=Qg4knCAK#0K_BvJMCSXOqxaUa7Qc6Fjex_--nNrJlOoB71t6nQUQ",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "𝐘𝐨𝐮𝐫 𝐒𝐭𝐚𝐭𝐮𝐬 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐥𝐲 𝐒𝐞𝐞𝐧𝐬 𝐁𝐲 sithu_hacker 🧚‍♀️🐣💗",


//=================================================
//මෙවා defult එවා කැමතිනම් false and true විතරක් වෙනස් කරගන්න..✨

PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94728786936' : process.env.OWNER_NUMBER,
MODE: process.env.MODE === undefined ?"private" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "true" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "true" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS === undefined ? "true" : process.env.AUTO_REACT_STATUS,
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY === undefined ? "true" : process.env.AUTO_STATUS_REPLY,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
AUTO_BLOCK: process.env.AUTO_BLOCK === undefined ? "false" : process.env.AUTO_BLOCK,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
ALLWAYS_OFFLINE: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
READ_MESSAGE: process.env.READ_MESSAGE === undefined ? "true" : process.env.READ_MESSAGE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING === undefined ? "true" : process.env.ALWAYS_RECORDING,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "true" : process.env.AUTO_REACT,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "true" : process.env.BAD_NO_BLOCK,
AI_CHAT: process.env.AI_CHAT === undefined ? "true" : process.env.AI_CHAT,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,
ALWAYS_TYPING: process.env.ALWAYS_TYPING === undefined ? "true" : process.env.ALWAYS_TYPING,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
OMDB_API_KEY: process.env.OMDB_API_KEY || "497566",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
