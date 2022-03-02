const { Embed, Util } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const client = require("../../index");


module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {
    




    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new Embed()
        .setTitle("Here is a list of all the commands:")
        .addFields(...categories)
        .setColor(Util.resolveColor("Random"))
        .setDescription(
          `Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help kick\`.`
        )
        
        .setTimestamp()
        
      return message.channel.send({ embeds: [embed]})
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new Embed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
         
        return message.channel.send({ embeds: [embed]})
      }
      try { 
      const embed = new Embed()
      .setColor(Util.resolveColor("Random"))
        .setTitle("Command Details:")
        .addField({name: "PREFIX:", value: `\`${prefix}\``})
        .addField({          
          name: "COMMAND:",
          value: command.name ? `\`${command.name}\`` : "No name for this command."
        })
        .addField(
         { name: "ALIASES:",
          value: command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."}
        )
        .addField(
          {name: "USAGE:",
          value: command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``}
        )
        .addField(
          {name: "DESCRIPTION:",
          value: command.description
            ? command.description
            : "No description for this command."}
            )
       
        .setTimestamp()
        
      return message.channel.send({ embeds: [embed]})
    } catch(e) {
      console.log(e)
      return message.channel.send(`\`\`\`js\n${e}\`\`\``)
    }
  }
  },
};