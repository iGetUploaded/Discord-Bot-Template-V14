const { Embed, version: djsversion, ActionRow, ButtonComponent, Util } = require("discord.js");
const moment = require("moment");
const momentDurationFormatSetup = require("moment-duration-format");
const version = require("../../package.json").version;
const { utc } = require("moment");
const mongoose = require('mongoose')
const os = require("os");
const ms = require("ms")
module.exports = {
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
  name: "bot-stats",
  aliases: ['bs'],
  description: "Check the info of the bot",
    run: async (client, message, args, utils) => {
      try{

    
        const uptime = moment
        .duration(client.uptime)
        .format(" D [days], H [hrs], m [mins], s [secs]");
        const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    
    const members = `${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`
    const embed = new Embed()
    
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("Bot stats!")
      
      .addField({name: "Servers: ", value: `\`${client.guilds.cache.size} servers\``, inline: true})   
      .addField({name: "Users: ", value: `\`${members} users\``, inline: true})   
      .addField({name: "Uptime: ", value: `\`${uptime}\``, inline: true})
      .addField({name: "Commands: ", value: `\`${client.commands.size}\``, inline: true})      
      .addField({name: "Slash Commands: ", value: `\`${client.slashCommands.size}\``, inline: true})
      .addField({name: "Version: ", value: ` \`${version}\``, inline: true})
      .addField({name: "Ping: ", value: ` \`${client.ws.ping}ms\``, inline: true})
      .addField({name: "DJS version: ", value: ` \`${djsversion}\``, inline: true}) 
      .addField({name: "Node version: ", value: `\`${process.version}\``, inline: true})  
      .addField({name: "Database: ", value: `\`MongoDB\``, inline: true})
      .addField({name: "Mongoose version: ", value: `\` ${mongoose.version}\``, inline: true})
      .addField({name: "Created: ", value: ` <t:${~~(client.user.createdTimestamp / 1000)}:R>`, inline: true})
      .setColor(Util.resolveColor('Green'))
      

      message.channel.send({ embeds: [embed]});
  } catch(e) {
    console.log(e)
    return message.channel.send(`\`\`\`js\n${e}\`\`\``)
  }
},
}
