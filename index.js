const Discord = require('discord.js')
const bot = new Discord.Client()
const Sup = require('./commands/sup')
const Sup = require('./commands/prout')


bot.on('message', function (message) {
    let commandUsed =
        Sup.parse(message)
})

bot.login(process.env.TOKEN)
