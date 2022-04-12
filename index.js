const { Client, Intents } = require('discord.js');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const { token } = require('./config.json');

// New instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Load files
const eventFiles = fs.readdirSync('./src/events').filter(f => f.endsWith('.js'));

// Event handler
for (const file of eventFiles) {
	const event = require(`./src/events/${file}`);

	// check if event is once
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

// Define REST
// const rest = new REST({ version: '9' }).setToken(token);

client.login(token);
