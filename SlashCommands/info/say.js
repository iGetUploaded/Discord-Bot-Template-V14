const { ApplicationCommandType, ApplicationCommandOptionType, Embed } = require('discord.js');


module.exports = {
  name: 'say',
  description: 'repeat',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'say',
        description: 'Person to get their avatar',
        type: ApplicationCommandOptionType.String,
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
    const say = interaction.options.getString('say')
    

        await interaction.followUp({ content: `${say}` });
    }
}