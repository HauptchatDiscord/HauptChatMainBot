// imports
const { Client, Intents } = require('discord.js');

// create discord client
const bot = new Client({
    ws: {
        intents: Intents.ALL,
    },
});

// load bots magic stuff
const botsMagicStuff = loadTheBotMagic();

// message event
bot.on('message', (message) => {
    // 3 layer security check XD
    if (everythingIsSecure()) {
        if (!everythingIsSecure()) return;
        if (everythingIsSecure()) {
            bot.doMagic(botsMagicStuff, message);
        }
    }
});

// finally login the bot
bot.login(process.env.BOT_TOKEN);
