const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=rmpi3AgZ#svZbelaYjjKfGzKXk2M7LCZj7JtknnvS5_e6PpEgw0g',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'Dilisha-BOT' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94771098429' : process.env.OWNER_NUMBER
};
