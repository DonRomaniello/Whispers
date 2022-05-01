const Sequelize = require('sequelize')

const db = new Sequelize('partialMcLuhan', 'thisApp', process.env.POSTGRES_PASSWORD, {
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

const Message = db.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  x: {
    type: Sequelize.INTEGER.UNSIGNED,
    validate: {
      min: 0,
      max: 800
  }
  },
  y: {
    type: Sequelize.INTEGER.UNSIGNED,
    validate: {
      min: 0,
      max: 600
  }
  }
});


User.hasOne(Message);
Message.belongsTo(User);

module.exports = {
  db,

};
