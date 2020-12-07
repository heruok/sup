const Discord = require('discord.js')
const bot = new Discord.Client()
const Sup = require('./commands/sup')
const Prout = require('./commands/prout')
const Alex = require('./commands/alex')
const Paf = require('./commands/paf')


bot.on('message', function (message) {
    let commandUsed =
        Sup.parse(message)
        Prout.parse(message)
        Alex.parse(message)
        Paf.parse(message)
})

bot.login(process.env.TOKEN)
