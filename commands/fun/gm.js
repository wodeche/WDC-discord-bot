const { SlashCommandBuilder } = require('discord.js');

const gmCounter = {}
module.exports = {
  cooldown: 86400,
  data: new SlashCommandBuilder()
    .setName('gm')
    .setDescription('gm  with you !'),
  async execute(interaction) {
    const userId = interaction.user.id;
    if (!gmCounter[userId]) {
      gmCounter[userId] = 0;
    }
    gmCounter[userId]++;
    await interaction.reply(`GM！${interaction.user.username} you’ve said gm ${gmCounter[userId]} times`)
  }
};