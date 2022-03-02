const { Client, CommandInteraction, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, ActionRow, ButtonComponent, Embed, Util, SelectMenuComponent, SelectMenuOption, SelectMenuInteraction } = require("discord.js");

module.exports = {
    name: "button",
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
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Primary).setCustomId('1234'),
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Danger).setCustomId('534534'),
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Success).setCustomId('1123'),
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Link).setURL("https://discord.com")
        )
        const embed = new Embed().setDescription("Hello! This is how you send buttons with \`v14!\`").setColor(Util.resolveColor("Random"))
        interaction.followUp({embeds: [embed], components: [row]})
    },
};
