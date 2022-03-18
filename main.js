require('dotenv').config()
const Discord = require("discord.js");
var cron = require("cron");
const TOKEN = process.env.TOKEN || "No Token?";


const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

const prefix = '-';

client.once('ready', client =>{
    console.log("Papajbot is online");
    let scheduledMessage = new cron.CronJob('03 37 21 * * *', () => {
        client.channels.cache.get('439906126302019614').send("<@&" + '439097986824273930' + '> 2137');
        client.channels.cache.get('439906126302019614').send('<:pawelLooking:521790482716688384>');
        client.channels.cache.get('439906126302019614').send('Nie ma mnie więc Papaj mówi za mnie.');
    });
    scheduledMessage.start();
});

client.on("messageCreate", m => handleMessage(m));

function handleMessage(message){
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    switch(command){
    
    case 'lubisz_dzieci?':
        {
            message.channel.send('jeszcze jak');
            break;
        }
    case '2137':
        {
            message.channel.send('2137 <:pawelLooking:521790482716688384>')
            break;
        }
    case 'czy_hitler_wiedział?':
        {
            message.channel.send('nie');
            break;
        }
    case 'rzuć_monetą':
        {
            const outcome=['orzeł','reszka'];
            let r = getRandomInt(2);
            message.channel.send(outcome[r]);
            break;
        }
    case 'czy_norbi_bije_kobiety?':
        {
            const outcome=['nie wiem','nie mogę powiedzieć','podpisałem umowę, więc nie mogę powiedzieć',
            'tak...','<:SoyrbiPunch:894603161292128287>','a jak myślisz?'];

            let r = getRandomInt(6);
            message.channel.send(outcome[r]);
            break;
        }
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
client.login(TOKEN);