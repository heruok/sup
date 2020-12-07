const Command = require('./command')

module.exports =  class Alex extends Command {


    static match (message) {
        return message.content.startsWith('paf')
    }

    static action (message) {
        const { voice } = message.member
        
        if (!voice.channelID) {
            message.reply("PAF ! Tu lui fais chanter L'Avé Maria")
            return
        }
        voice.channel.join()
        .then(function (connection) {
            connection
                .play('./paf.mp3')
                .on('end', function () {
                    connection.disconnect()
                })
        })
    }
}
