const { ApplicationCommandType, ApplicationCommandOptionType, Embed, Util } = require('discord.js');


module.exports = {
  name: 'avatar',
  description: 'Get the avatar of a user',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'target',
        description: 'Person to get their avatar',
        type: ApplicationCommandOptionType.User,
        required: true
    },
    
  ],
   /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
    const target = interaction.options.getMember('target')
    const embed = new Embed()
        .setTitle(`**> AVATAR of ${target.user.username}**`)
        .setImage(`${target.user.displayAvatarURL({dynamic : true, size: 1024})}`)
        .setColor(Util.resolveColor("Random"))
        .setTimestamp()

        await interaction.followUp({ embeds: [embed] });
    }
}