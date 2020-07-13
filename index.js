const Discord = require('discord.js');
const botsettings = new Discord.Client();
const {
    prefix,
    token,
} = require('./config.json');
const ytdl = require('ytdl-core');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("ready", function () {
    console.log('$(bot.user.username) Is Online!');
    bot.user.setActivity("Я замегафтельный бот!:dog:", {type: "CUSTOM_STATUS"})
});

client.once('ready', () => {
    console.log('Ready!');
})
client.once('reconnecting', () => {
    console.log('Reconnecting!');
})
client.once('disconnect', () => {
    console.log('Disconnect!');
})

//Discord
//█_____█___█_████______████____█____█____█████___█████___██___████_
//█_____█___██____██___█______█████████______██______██__█_█__█____█
//_█___█____██________███______█____█______███_____███_____█___█████
//_█___█____██_________█_____█████████_______██______██____█_______█
//__█_█_____██_________█______█____█__________█_______█____█_____██_
//___█______██_________█_____█____█_______█████___█████____█__████__
//