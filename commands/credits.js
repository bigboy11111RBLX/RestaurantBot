const { MessageButton } = require('discord-buttons');
module.exports = {
	name: 'credits', //name
	description: 'Credits!', //description
	execute(message, args, client) { //uses message and args from index.js
        let button = new MessageButton()
        .setStyle('url') // url type out of URL, GREEN, RED, and more
        .setURL('https://github.com/bigboy11111RBLX/RestaurantBot') // url if u choose url
        .setLabel('Github Repo!')  // name on button
        .setDisabled(); // delete if u want buttont to be clicked
      
      message.channel.send('Hi! This awesome bot was made by Bigboy_11111#0001', button); //sends that
	},
};