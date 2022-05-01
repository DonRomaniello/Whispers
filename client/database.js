const Sequelize = require('sequelize')

const db = new Sequelize('particle_mcluhan', 'thisApp', process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const User = db.define('user', {
  token: {
    type: Sequelize.JSON,
    allowNull: false,
  }
});

module.exports = {
  db,
  User
};
