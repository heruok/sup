const Command = require('./command')

module.exports =  class Prout extends Command {


    static match (message) {
        return message.content.startsWith('prout')
    }

    static action (message) {
        const { voice } = message.member
        
        if (!voice.channelID) {
            message.reply("Joue pas avec mes prouts..")
            return
        }
        voice.channel.join()
        .then(function (connection) {
            connection
                .play('./prout.mp3')
                .on('end', function () {
                    connection.disconnect()
                })
        })
    }
}
