const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "t.";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "modpack")) {
    message.channel.send("URL Curse : https://www.curseforge.com/minecraft/modpacks/technoskies");
  } else
  if (message.content.startsWith(prefix + "copyright")) {
    message.channel.send("Codeur : Max.#9208 Fait pour TechnoSkies");
    }
  if (message.content.startsWith(prefix + "regles")) {
    message.channel.send("Merci d'aller lire les règles ! \nElles se trouvent dans #「📏」règles .");
  } else
  if (message.content.startsWith(prefix + "conv")) {
    message.channel.send("Votre conversation n'a pas à avoir lieu ici ! \nMerci de ce rediriger vers les salons adéquat  ---->  #「💬」discussion");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("**___Les commandes sont :___** \n\n**Le Prefix est : t.** \n\n!modpack : permet d'avoir le lien pour télécharger le modpack  \n!conv : De dire aux membres que la conversation dans ce salon (réservé au staff) \n!regles : De dire aux membres d'aller relire les règles. (Réservé au staff) \n!help : Permet de montrer toute les commandes possible \n!8ball : Permet de poser une question au bot\n!credit : Envoie le credit du Bot")
  } else
  if (message.content.startsWith(prefix + "off")) {
    message.channel.send("**Cette commande existera jamais pour m'etteindre !**");
  } else
  if (message.content.startsWith(prefix + "technomod")) {
    message.channel.send("TechnoMod est le mod qui accompagne désormais TechnoSkies");
  }  
});
    
client.login(process.env.TOKEN);

client.on("guildMemberAdd", user => {
    user.guild.channels.get("640662990449803307").send("Bienvenue "+ user + " sur le serveur " + user.guild.name + " !" )
});
client.on("guildMemberRemove", user => {
    user.guild.channels.get("640662990449803307").send(user.user.username + " à quitté le serveur !")
});
