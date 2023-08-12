const Sequelize = require('sequelize')


//连接信息
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  storage: 'database.sqlite',
});
//define a model 
const Counts = sequelize.define('gmCounts', {
  uid: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  username: Sequelize.STRING,
  gm_counts: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Counts
}