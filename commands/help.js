const Discord = require('discord.js');
module.exports = {
    name: 'help', //name
    description: 'Help is on the way', //description
    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f5ad42') //embed line color
        .setTitle('Help') //embed top title
        .setDescription('This bot is to simulate being at a real restaurant. Due to the shutdowns, and or people living far away. This is to be in VCs for background noise as of real life.')
        .addFields(
            { name: '!help', value: 'Shows the commands' },
            { name: '!credits', value: 'Shows the credits with GitHub repo' },
            { name: '!ping', value: 'Pong' },
            { name: '!list', value: 'Shows the list of restaurants.'},
        ) 
        .setTimestamp() //shows time of embed sent
        .setFooter('Help') //bottom footer of embed

        message.channel.send(newEmbed); //sends the embed
    }
};