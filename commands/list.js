const Discord = require('discord.js');
module.exports = {
    name: 'list', //name
    description: 'List of the audios', //description
    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f5ad42') //embed line color
        .setTitle('List') //embed top title
        .setDescription('List of the places you can hear.')
        .addFields(
            { name: 'McDonalds', value: '!mcd COMING SOON' },
            { name: 'Standard Restaurant', value: '!srt COMING SOON' },
            { name: 'Fancy Restaurant', value: '!frt COMING SOON' },
        ) 
        .setTimestamp() //shows time of embed sent
        .setFooter('Help') //bottom footer of embed

        message.channel.send(newEmbed); //sends the embed
    }
};