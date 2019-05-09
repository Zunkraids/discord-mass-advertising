var config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require('fs');

var array = fs.readFileSync('tokens.txt').toString().split("\n");
for(i in array) {

}

var randomToken = array[Math.floor(Math.random()*array.length)];


client.on("ready", () => {
console.log('Bot Online and Ready! On ' + client.guilds.size + ' Servers!');
});

client.on("error", (e) => {
console.error(e);
});

client.on("warn", (e) => {
console.warn(e);
});

client.on("debug", (e) => {
console.info(e);
});

process.on('unhandledRejection', (reason, promise) => {
console.log('Unhandled Rejection at:', reason.stack || reason)
return;
});

client.on("message", msg => {
if (msg.author.bot) return; // Dont message bots

if(msg.content === config.prefix + congig.triggercommand) {
let guild = config.guild;

var membersS = []

guild.members.forEach(function(member, index) {
if(ignoreDM.includes(index)) return;
membersS.push(member)
})

memberss.forEach(function(memberz, index)
{
 setTimeout(function () {
  memberz.send(msg1, { split: '\n' } )
  console.log("DM'ED " + memberz)
  }, index * interval);
})

}
})
client.login(randomToken);
