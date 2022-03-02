const { Message, Client, ButtonStyle, ActionRow, ButtonComponent, Embed, Util } = require("discord.js");

module.exports = {
    name: "button",
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
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Primary).setCustomId('1234'),
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Danger).setCustomId('534534'),
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Success).setCustomId('1123'),
            new ButtonComponent().setLabel("Hello!").setStyle(ButtonStyle.Link).setURL("https://discord.com")
        )
        const embed = new Embed().setDescription("Hello! This is how you send buttons with \`v14!\`").setColor(Util.resolveColor("Random"))
        message.channel.send({embeds: [embed], components: [row]})
    },
};
