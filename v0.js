// Created by Zunkraids (https://github.com/Zunkraids)
// Donate Bitcoin: 1AhcfnkFGi956CJo7Kzsj3oh1HRPVxq5r1

var config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require('fs');

var array = fs.readFileSync('tokens.txt').toString().split("\n");
for(i in array) {

}

var randomToken = array[Math.floor(Math.random()*array.length)];


client.on("ready", () => {
console.log('Bot Online and Ready, we are live on ' + client.guilds.size + ' servers!');
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

if(msg.content === config.prefix + config.triggercommand) {
let guild = client.guilds.get(config.guildID);

var membersS = []

guild.members.forEach(function(member, index) {
if(config.ignoreDM.includes(index)) return;
if(member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS") || member.hasPermission("MANAGE_ROLES")) return;
membersS.push(member)
})
 
membersS.forEach(function(memberz, index)
{
 setTimeout(function () {

  
  var data = fs.readFileSync(config.dmedfile,'utf8')
  if(data.includes(memberz))
  {
    console.log(data);
    return;
  }
  // fs.appendFileSync('message.txt', 'data to append');
  
  memberz.send(config.message, { split: '\n' } )
  console.log("DM'ED " + memberz)
  
  fs.appendFileSync(config.dmedfile, memberz, (err) => {
   if (err) console.log(err);
   console.log("I have added " + memberz + " to the list to not DM.")
  });
  
  }, index * config.interval);
})

}
})
client.login(randomToken);
