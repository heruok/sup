const Command = require('./command')

module.exports =  class Gay extends Command {


    static match (message) {
        return message.content.startsWith('gay')
    }

    static action (message) {
        const { voice } = message.member
        
        if (!voice.channelID) {
            message.reply("Tout le monde le sait .. Alex et William sortent ensemble..")
            return
        }
        voice.channel.join()
        .then(function (connection) {
            connection
                .play('./gay.mp3')
                .on('end', function () {
                    connection.disconnect()
                })
        })
    }
}
