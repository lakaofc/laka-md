const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID || "session id"LAKA-MD=pxYBXCbT#a_rBiie5Vwew4HXS5WJv86gVfwa-L_1Epgm2N3NxlmE,
PREFIX: process.env.PREFIX || '.' ,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "false" : process.env.AUTO_STICKER,
WELCOME_GOODBAY: process.env.WELCOME_GOODBAY === undefined ? "true" : process.env.WELCOME_GOODBAY,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS === undefined ? "true" : process.env.AUTO_REACT_STATUS,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
AUTO_BLOCK: process.env.AUTO_BLOCK === undefined ? "false" : process.env.AUTO_BLOCK,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
ALLWAYS_OFFLINE: process.env.AUTO_READ_STATUS === undefined ? "false" : process.env.AUTO_READ_STATUS,
READ_MESSAGE: process.env.READ_MESSAGE === undefined ? "false" : process.env.READ_MESSAGE,
READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING === undefined ? "false" : process.env.ALWAYS_RECORDING,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "false" : process.env.ANTI_CALL,
ALWAYS_TYPING: process.env.ALWAYS_TYPING === undefined ? "false" : process.env.ALWAYS_TYPING,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:lakamd@db.ndduyrkebubwlbwiljee.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
