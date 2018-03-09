const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';

client.on('creator', () => {
    console.log('Ready to execute!');
});

// Creator
client.on('message', message => {
    if (message.conten.startWith(prefix + 'creator')) {
    	message.channel.send('This is the official Aborted Discord Bot! Created by Gustings');
  	}
});    

        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
