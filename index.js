const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NzI1NDYzMzM3MTgxMjQ5NTg2.XvZZaA.sb3M5YESTnPEHd48wmENtrKbot8");

client.on('message', (message) =>{
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