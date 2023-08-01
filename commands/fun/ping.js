const { SlashCommandBuilder } = require('discord.js');

const gmCounter = {}
module.exports = {
  cooldown: 100,
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    const userId = interaction.user.id;
    if (!gmCounter[userId]) {
      gmCounter[userId] = 0;
    }
    gmCounter[userId]++;
    await interaction.reply(`${interaction.user.username} had ${gmCounter[userId]} times`)
  }
};