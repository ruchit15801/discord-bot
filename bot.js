require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  console.log(` Your Bot Is ${client.user.username}`);
});

client.on("message", (message) => {
  console.log(`${message.content}`);
  console.log(message);
  if (message.content === "/bot") {
    message.channel.send("/Hello there!");
  }
});

client.login(process.env.BOT_TOKEN);
