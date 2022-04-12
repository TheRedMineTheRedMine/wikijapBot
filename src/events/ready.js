require('colors');

module.exports = {
    name: "ready",
    once: true,
    async execute (client) {
        // Ready
        console.log(`${client.user.tag} is ready !`.green);
        client.channels.cache.get('963478766800212088').send('Ready !');

        // Status
        client.user.setPresence({
            activities: [{
                name: 'Wikijap',
                type: 'WATCHING'
            }],
            status: 'dnd'
        });
    }
}
