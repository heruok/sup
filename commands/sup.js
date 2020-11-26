const Command = require('./command')

module.exports =  class Sup extends Command {


    static match (message) {
        return message.content.startsWith('!sup')
    }

    static action (message) {
        let voiceChannel = message.guild.channels.cache
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
        voiceChannel
        .join()
        .then(function (connection) {
            connection.play('./sup.mp3')
        })
    }
}
