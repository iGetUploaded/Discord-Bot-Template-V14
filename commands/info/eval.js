const { Message, Client, Embed, ButtonComponent, ButtonStyle, ActionRow, Util } = require("discord.js");
const { inspect } = require("util")
module.exports = {
    name: "eval",
    aliases: ['ev'],
    description: "Displays the info of the member!",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.author.id !== 'YOUR ID') return message.channel.send("This is an owner only command!")
const code = args.join(" ");
if(!code) return message.channel.send("Please provide something to eval!")
try {
    const result = await eval(code);
    let output = result;
    if(typeof result !== "string") {
        output = inspect(result);
    }
    message.channel.send(`\`\`\`js\n${output}\`\`\``)
} catch (e) {
    console.log(e);
    message.channel.send(`${e}`);
}
}
}
