const Command = require('./command')

module.exports =  class Sup extends Command {


    static match (message) {
        return message.content.startsWith('!sup')
    }

    static action (message) {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(function (connection) {
                        connection.play('./sup.mp3')
                    })
            }
         }
         else
         {
             message.reply("Y'a personne les fdp");
         }
    }
}
