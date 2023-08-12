const { SlashCommandBuilder } = require('discord.js');
// test command
const db = require('../../db.js')
module.exports = {
  cooldown: 1,
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('pong')
  }
};
