const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';

client.on('Ready', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
}

 if (message.content.startsWith(prefix + "owners")) {
    message.channel.send('The owners of The Aborted discord are Bigseth and Andresen');
  } else
  if (message.content.startsWith(prefix + "website")) {
    message.channel.send('AbortedBot Website: sites.google.com/view/abortedbot');
  } 
});

        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
