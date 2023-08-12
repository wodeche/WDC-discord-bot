const { SlashCommandBuilder } = require('discord.js');

const db = require('../../db.js')

module.exports = {
  //cooldown 24hours 
  cooldown: 86400,
  data: new SlashCommandBuilder()
    .setName('gm')
    .setDescription('daily gm'),
  async execute(interaction) {
    const userId = interaction.user.id;
    const count = await db.Counts.findOne({ where: { uid: userId } });
    if (count) {
      await count.increment('gm_counts');
      const reloadedCount = await count.reload();
      const newCount = reloadedCount.get('gm_counts');
      return interaction.reply(`GM ${interaction.user.username} ! you said gm ${newCount} times`);
    } else {
      const count = await db.Counts.create({
        uid: interaction.user.id,
        username: interaction.user.username,
        gm_counts: 1
      })
      return interaction.reply(`Welcome ${interaction.user.username},This is the first time you GM in LXDAO！:tada: :tada: :tada: `);
    }
  }
};

