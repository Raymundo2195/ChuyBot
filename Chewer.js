const Discord = require('discord.js');


const client = new Discord.Client();

const token = 'MzE3MTI0NjAwODA0ODAyNTYw.DAfw5Q.slTz4vppbGwDPfehrKdM79gPmOI';
var count = 0;
var voice_connection = null;
var voice_handler = null;
var text_channel = null;

var clips = ['Exactly.mp3',
		'OfCourse.mp3',
		'OfcTy4Watching.mp3',
		'Ohai.mp3',
		'Simple.mp3',
		'TalkinAbout1.mp3',
		'TalkinAbout2.mp3',
		'TalkinAbout3.mp3',
		'TalkinAbout4.mp3',
		'Ty4Watching.mp3'
]

function getRandomClip() {
	max = clips.length;
	return clips[Math.floor(Math.random() * max)];

}
client.on('ready', () => {
	console.log('Connected!');
});

client.on('message', message => {
	let prefix = 'chuy';
	// console.log(message.author);
	if (message.content.startsWith(prefix)) {

		const voiceChannel = message.member.voiceChannel;
		if(message.content.startsWith(prefix+'help')){
			message.channel.send("Possible chuy commands are:\nping\nexactly\nofc\nlong\nhai\nsimple\ntalkin1\ntalkin2\ntalkin3\ntalkin4\nty")

		}
		else if (voiceChannel){
			voiceChannel.join().then(connection => {
				var clip;
				if (message.content.startsWith(prefix+'ping')){
					clip = getRandomClip();
				}
				else if(message.content.startsWith(prefix+'exactly')){
					clip = clips[0];
				}
				else if(message.content.startsWith(prefix+'ofc')){
					clip = clips[1];
				}
				else if(message.content.startsWith(prefix+'long')){
					clip = clips[2];
				}
				else if(message.content.startsWith(prefix+'hai')){
					clip = clips[3];
				}
				else if(message.content.startsWith(prefix+'simple')){
					clip = clips[4];
				}
				else if(message.content.startsWith(prefix+'talkin1')){
					clip = clips[5];
				}
				else if(message.content.startsWith(prefix+'talkin2')){
					clip = clips[6];
				}
				else if(message.content.startsWith(prefix+'talkin3')){
					clip = clips[7];
				}
				else if(message.content.startsWith(prefix+'talkin4')){
					clip = clips[8];
				}
				else if(message.content.startsWith(prefix+'ty')){
					clip = clips[9];
				}
				else if(message.content.startsWith(prefix)){
					message.channel.send("That is not a recognized chuy command. Possible chuy commands are:\nping\nexactly\nofc\nlong\nhai\nsimple\ntalkin1\ntalkin2\ntalkin3\ntalkin4\nty")
				}
				const dispatcher = connection.playFile('./'+clip);
				dispatcher.on('end', d => { connection.disconnect(); })
			}).catch(console.error);
			count++;
			console.log("play #"+count);
		}
		else {
			message.channel.send("You must be in a voice channel for this command to work, as always, thank you for watching.");
		}

	}
});

client.login(token);