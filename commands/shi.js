const Command = require('./command')

module.exports =  class Shi extends Command {


    static match (message) {
        return message.content.startsWith('shi')
    }

    static action (message) {
        const { voice } = message.member
        
        if (!voice.channelID) {
            message.reply("OH SHIIIIIIIIIIIIIIIII")
            return
        }
        voice.channel.join()
        .then(function (connection) {
            connection
                .play('./shi.mp3')
                .on('end', function () {
                    connection.disconnect()
                })
        })
    }
}
