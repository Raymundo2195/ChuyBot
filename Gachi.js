const Discord = require('discord.js');
const fs = require('fs')

const client = new Discord.Client();

const token = 'MzE3MTI0NjAwODA0ODAyNTYw.DL3s4w.HD0JbTvI5nj8-KczCIPn1Tw44FU';
var count = 0;
var voice_connection = null;
var voice_handler = null;
var text_channel = null;

var readInClips = []

var clipsFolder = './Gachi/';
fs.readdir(clipsFolder, (err, files) =>
    files.forEach(file => {
        readInClips.push(file.split('.')[0]);
    })
);

client.on('ready', () => {
    console.log('Connected!');
});

client.on('message', message => {
        if (readInClips.includes(message.content)){
            const voiceChannel = message.member.voiceChannel;
            if (voiceChannel){
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.playFile('./Gachi/'+message.content+'.mp3');
                    dispatcher.on('end', d => { connection.disconnect(); })
                }).catch(console.error);
            } else {
                message.channel.send("You need to be in voice u dingus.")
            }
        }
    }
);

client.login(token);