const Discord = require("discord.js");
const botsettings = new Discord.Client();

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", function () {
    console.log('$(bot.user.username) Is Online!');
    bot.user.setActivity("Я замегафтельный бот!", {type: "LISTENING"})
});

bot.login(process.env.token);

bot.on('message', (message) =>{
    if(message.content == "s!test")
    {
    message.channel.send("Бот работает!");
    }
    
    if(message.content == "prefixbot")
    {
    message.channel.send("Префикс бота - s! ")
    }

    if(message.content == "префиксбота")
    {
    message.channel.send("Префикс бота - s!")
    }

    if(message.content == "префикс бота")
    {
    message.channel.send("Префикс бота - s!")
    }

    if(message.content == "Префиксбота")
    {
    message.channel.send("Префикс бота - s!")
    }

    if(message.content == "Префикс бота")
    {
    message.channel.send("Префикс бота - s!")
    }

    if(message.content == "Prefixbot")
    {
    message.channel.send("Префикс бота - s!")
    }

    if(message.content == "Prefix")
    {
    message.channel.send("Префикс бота - s!")
    }

    if(message.content == "s!help")
    {
    message.channel.send("Тест1\nТест2\nчечня3")
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