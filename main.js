const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.default({ test: []});
   .write()

var bot = new Discord.Client();
var prefix = (".");
var randnum = 0;




bot.on ('ready', () => {
    bot.user.setPresence({ game: { name: '[.help] IPBot', type: 0}})
	console.log("Bot Is Ready !");
})

bot.login('process.env.TOKEN');

bot.on('message', message => {
    if (message.content === prefix + "IP"){
    var ip_embed = new Discord.RichEmbed()
    .setColor('#1bba1b')
    .addField("Site Web !", "  Le Site Ou Il y a Toute Les IPs https://ipjoueurbyanonymeiprp.000webhostapp.com/ ")
    .addField("Invite Sur Le Discord !", "  Voici L'invite https://discord.gg/Q9KM6t6 ")
    message.channel.sendEmbed(ip_embed);
     // message.channel.sendMessage("Le Site Ou Il y a Toute Les IPs https://ipjoueurbyanonymeiprp.000webhostapp.com/");
      console.log("message IP Demmander");
    }

    if(!message.content.startsWith(prefix)) return;
    var args = message.content.substing(prefix.length).split(" ");


    switch (args[0].toLowerCase()){

   case "newstory":
   var value = message.contrnt.substr(10);
   var author = message.author.id;
   console.log(value);
   message.reply("Ajoute Un Texte Pour Un Test")

   db.get('test')
   .push(( id: number + 1, story_value: value, storyauthor: author));
   .write();

   break;

    }   

  if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor('#1bba1b')
    .addField("Commande Utile !", "  -.IP Pout Voir Le Site Et L'invite Discord\n-.help Pour Afficher Les Commandes Du Bot")
    .addField("Question au Bot", "  -.Que Peut Tu Me Donner Pour Lui Demander Comment Il Va")
    message.channel.sendEmbed(help_embed)
     // message.reply("Voici Les Commande Du Bot:\n -.help Pour Afficher Les Commandes Du Bot\n -.IP Pour Afficher Le Lien Du Site");
      console.log("Message Help Demander !");
  }

  if (message.content === prefix + "Que Peut Tu Me Donner"){
      random();
 
  if (randnum ==1){
    message.reply("Le Lien Pour M'inviter Dans Sur Ton Serveur\nTien: https://discordapp.com/oauth2/authorize?client_id=391897513516466196&scope=bot&permissions=2146958591")
    console.log("Que Peut Tu Me Donner 1")
    }

  if (randnum ==2){
    message.reply("Jte Donne Le Lien D'un Booteur 120 Seconde Gratuit Jusqu'a 17/02/2018\n Tien: https://mega.nz/#!QWpmlIoY!1r3tUypSBwGGAOp5YyRHo7iHyEVl2YroS3KEkWntLyU")
    console.log("Que Peut Tu Me Donner 2")
  }

  if (randnum ==3){
    message.reply("Rien :middle_finger: ")
    console.log("Que Peut Tu Me Donner 3")
  }


  

  }







    });

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}



function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

