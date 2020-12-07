const Discord = require('discord.js')
const bot = new Discord.Client()
const Sup = require('./commands/sup')
const Prout = require('./commands/prout')
const Gay = require('./commands/gay')


bot.on('message', function (message) {
    let commandUsed =
        Sup.parse(message)
        Prout.parse(message)
})

bot.login(process.env.TOKEN)
