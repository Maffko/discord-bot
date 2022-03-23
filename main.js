const Discord = require("discord.js")
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("config.json", "utf8"))

var client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", function() {
    console.log(`Logged in as ${client.user.username}!`)
})

var cmdmap = {
    say: cmd_say
}

function cmd_say(msg, args) {
    msg.channel.send(args.join(" "))
}

client.on("message", function(msg) {
    var cont = msg.content,
        author = msg.member

    if (author.id != client.user.id && cont.startsWith(config.prefix)) {
        var invoke = cont.split(" ")[0].substr(config.prefix.length),
            args = cont.split(" ").slice(1)
        if (invoke in cmdmap) {
            cmdmap[invoke](msg, args)
        }
    }
})

client.on("message", function(message) {
    if (message.content === "ses") {
        message.reply("samses")
    }
})

client.on("message", function(message) {
    if (message.content === "#BROKAN") {
        message.reply("https://youtu.be/VtPgSnCkcEU")
    }
})

client.on("message", function(message) {
    if (message.content === "typek co daboval happy feet") {
        message.reply("https://youtu.be/VtPgSnCkcEU")
    }
})

client.on("message", function(message) {
    if (message.content === "fifik") {
        message.reply("je zebrak")
    }
})

client.on("message", function(message) {
    if (message.content === "best sser in da world") {
        message.reply("MAFYN!!!")
    }
})

client.on("message", function(message) {
    if (message.content === "pipik") {
        message.reply("ses")
    }
})

const welcomeChannelId = "939850898203623434"

client.on("guildMemberAdd", function(member) {
    member.guild.channels.cache.get(welcomeChannelId).send(`Vitaj! <@${member.id}>`)
})

client.login(config.token)