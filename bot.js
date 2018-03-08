const Discord = require('discord.js');
const client = new Discord.Client();

// Creator
client.on('creator', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?creator') {
    	message.channel.send('This is the official Aborted Discord Bot! Created by Gustings');
  	}
});    

// Website
client.on('creator', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?website') {
    	message.reply('AbortedBot Website: https://sites.google.com/view/abortedbot');
  	}
});    

// Owners
client.on('owners', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?owners') {
    	message.reply('The owners of The Aborted discord are Bigseth and Andresen');
  	}
});    

        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
