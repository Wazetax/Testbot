const Discord = require('discord.js')
requiere('dotenv').config()

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on('ready', () => {
    console.log('¡Bot iniciado!')
})


client.on("messageCreate", (message) => {
    if (message.content == "Wena")
        message.reply("Wena man")
})

client.on("message", message => {
    if (message.content.toLowerCase() == "shutdown") { // Note that this is an example and anyone can use this command.
        message.channel.send("Amogus down...").then(() => {
            console.log('¡Bot terminado!')
            client.destroy();
        })
    }
})




client.login(TOKEN)
