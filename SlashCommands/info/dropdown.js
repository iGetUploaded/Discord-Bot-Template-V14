const { Client, CommandInteraction, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, ActionRow, ButtonComponent, Embed, Util, SelectMenuComponent, SelectMenuOption, SelectMenuInteraction } = require("discord.js");

module.exports = {
    name: "dropdown",
    description: "returns websocket ping",
    type: ApplicationCommandType.ChatInput,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const row = new ActionRow()
        .addComponents
        (
           
           new SelectMenuComponent().setCustomId("Dropdown")
           .setPlaceholder("Choose an option")
           .addOptions(
            new SelectMenuOption().setLabel('Hello').setValue('a'),
          new SelectMenuOption().setLabel('Hi').setValue('b'),
          new SelectMenuOption().setLabel('Bye').setValue('c')

)
                      
        )

        const embed = new Embed().setDescription("Hello! This is how you send dropdown menus with \`v14!\`").setColor(Util.resolveColor("Random"))
        interaction.followUp({embeds: [embed], components: [row]})
        const filter = (interaction) => {
            if(interaction.user.id === interaction.user.id) return true;
            
        }
 const collector = interaction.channel.createMessageComponentCollector({
     filter
 });


        
        collector.on("collect", async (collected) => {
            const value = collected.values;
            if(value == 'a') return collected.channel.send({ content: "You chose option one"})
            if(value == 'b') return collected.channel.send({ content: "You chose option two"})
            if(value == 'c') return collected.channel.send({ content: "You chose option three"})            
         })
    },
};
