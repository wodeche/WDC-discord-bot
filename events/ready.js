const { Events } = require('discord.js');
const db = require('../db.js')


module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    db.Counts.sync();
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};