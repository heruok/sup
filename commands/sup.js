const Command = require('./command')

module.exports =  class Sup extends Command {


    static match (message) {
        return message.content.startsWith('tg')
    }

    static action (message) {
        const { voice } = message.member
        
        if (!voice.channelID) {
            message.reply("Joue pas avec mes couilles..")
            return
        }
        voice.channel.join()
        .then(function (connection) {
            connection
                .play('./sup.mp3')
                .on('end', function () {
                    connection.disconnect()
                })
        })
    }
}
