//                            Code by vrf#3319 <- discord
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function () {
    console.log('$(bot.user.username) Is Online!');
});

bot.login(process.env.token);

bot.on('message', (message) =>{
    if(message.content == "&test")
    {
    message.channel.send("Бот работает!");
    }
    
    if(message.content == "prefixbot")
    {
    message.channel.send("Префикс бота - & ")
    }

    if(message.content == "blabla")
    {
    message.channel.send("потом")
    }
});
//Discord
//█_____█___█_████______████____█____█____█████___█████___██___████_
//█_____█___██____██___█______█████████______██______██__█_█__█____█
//_█___█____██________███______█____█______███_____███_____█___█████
//_█___█____██_________█_____█████████_______██______██____█_______█
//__█_█_____██_________█______█____█__________█_______█____█_____██_
//___█______██_________█_____█____█_______█████___█████____█__████__
//