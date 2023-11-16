//必要なパッケージをインポートする
import { GatewayIntentBits, Client, Partials, Message } from 'discord.js'
import dotenv from 'dotenv'

//.envファイルを読み込む
dotenv.config()

//Botで使うGatewayIntents、partials
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildEmojisAndStickers,
		GatewayIntentBits.GuildIntegrations,
		GatewayIntentBits.GuildWebhooks,
		GatewayIntentBits.GuildInvites,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMessageTyping,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.DirectMessageReactions,
		GatewayIntentBits.DirectMessageTyping,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildScheduledEvents,
	],
	partials: [
		Partials.User,
		Partials.Channel,
		Partials.GuildMember,
		Partials.Message,
		Partials.Reaction,
		Partials.GuildScheduledEvent,
		Partials.ThreadMember,
	],
});

//Botがきちんと起動したか確認
client.once('ready', () => {
    console.log('Ready!')
    if (client.user) {
        console.log(client.user.tag)
    }
})

//!timeと入力すると現在時刻を返信するように
client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    if (message.content === '!time') {
        const date1 = new Date();
        message.channel.send(date1.toLocaleString());
    }
})

client.on("guildMemberAdd", member => {
    if (member.guild.id !== "993439391496290345") return;
    const channel = member.guild.channels.cache.get("993439391496290347");
    channel.send(`${member.user}が参加しました！`);
});

//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN)
