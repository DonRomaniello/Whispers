const Sequelize = require('sequelize')

const db = new Sequelize('particle_mcluhan', 'thisapp', process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const Offer = db.define('offer', {
  token: {
    type: Sequelize.JSON,
    allowNull: false,
  }
});

const Answer = db.define('answer', {
  token: {
    type: Sequelize.JSON,
    allowNull: false,
  }
});

module.exports = {
  db,
  Offer,
  Answer
};

