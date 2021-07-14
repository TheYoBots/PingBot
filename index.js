const Discord = require("discord.js");
const client = new Discord.Client({restTimeOffset: 100});

client.on("message", async message => {
    if (message.author.bot) return false;

    if (message.channel.id != "channel-id") {
            return false;
    }

    if (message.mentions.users.size > 0) {
        reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'emote-1');
        message.react(reactionEmoji);
        reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'emote-2');
        message.react(reactionEmoji);
    };
});

client.login(process.env.TOKEN);