
const db = require('./db');

async function cleanDatabase() {

  //删除表的内容

  await db.Counts.destroy({ where: {} });

  console.log('Database cleaned!');

}

cleanDatabase();