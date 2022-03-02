const { Message, Client, ButtonStyle, ActionRow, ButtonComponent, Embed, Util, SelectMenuComponent, SelectMenuOption, SelectMenuInteraction } = require("discord.js");

module.exports = {
    name: "dropdown",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
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
        message.channel.send({embeds: [embed], components: [row]})
        const filter = (interaction) => {
            if(interaction.user.id === message.author.id) return true;
            
        }
 const collector = message.channel.createMessageComponentCollector({
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
