const { SlashCommandBuilder } = require('discord.js');
const Database = require("@replit/database")
const db = new Database();


module.exports = {
  cooldown: 1,
  data: new SlashCommandBuilder()
    .setName('gm')
    .setDescription('gm  with you !'),
  async execute(interaction) {
    const userId = interaction.user.id;
    let count = await db.get(userId) || 0;
    count++;
    await db.set(userId, count);

    await interaction.reply(`${interaction.user.username} have used /${interaction.commandName} for ${count} times !`);
  }
};

