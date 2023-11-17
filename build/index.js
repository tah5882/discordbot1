"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//必要なパッケージをインポートする
const discord_js_1 = require("discord.js");
const discord_js_2 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
//.envファイルを読み込む
dotenv_1.default.config();
//Botで使うGatewayIntents、partials
const client = new discord_js_2.Client({
    intents: [
        discord_js_2.GatewayIntentBits.Guilds,
        discord_js_2.GatewayIntentBits.GuildMembers,
        discord_js_2.GatewayIntentBits.GuildEmojisAndStickers,
        discord_js_2.GatewayIntentBits.GuildIntegrations,
        discord_js_2.GatewayIntentBits.GuildWebhooks,
        discord_js_2.GatewayIntentBits.GuildInvites,
        discord_js_2.GatewayIntentBits.GuildVoiceStates,
        discord_js_2.GatewayIntentBits.GuildPresences,
        discord_js_2.GatewayIntentBits.GuildMessages,
        discord_js_2.GatewayIntentBits.GuildMessageReactions,
        discord_js_2.GatewayIntentBits.GuildMessageTyping,
        discord_js_2.GatewayIntentBits.DirectMessages,
        discord_js_2.GatewayIntentBits.DirectMessageReactions,
        discord_js_2.GatewayIntentBits.DirectMessageTyping,
        discord_js_2.GatewayIntentBits.MessageContent,
        discord_js_2.GatewayIntentBits.GuildScheduledEvents,
    ],
    partials: [
        discord_js_2.Partials.User,
        discord_js_2.Partials.Channel,
        discord_js_2.Partials.GuildMember,
        discord_js_2.Partials.Message,
        discord_js_2.Partials.Reaction,
        discord_js_2.Partials.GuildScheduledEvent,
        discord_js_2.Partials.ThreadMember,
    ],
});
//Botがきちんと起動したか確認
client.once('ready', () => {
    console.log('Ready!');
    if (client.user) {
        console.log(client.user.tag);
    }
});
//!timeと入力すると現在時刻を返信するように
client.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.author.bot)
        return;
    if (message.content === '!time') {
        const date1 = new Date();
        message.channel.send(date1.toLocaleString());
    }
}));
client.on('guildMemberAdd', (member) => __awaiter(void 0, void 0, void 0, function* () {
    if (member.guild.id !== "993439391496290345")
        return;
    const channel = member.guild.channels.cache.get("1174516722120786071");
    if (!channel || channel.type !== discord_js_1.ChannelType.GuildText)
        return;
    channel.send(`<@!${member.user.id}>が参加しました！`);
}));
//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
