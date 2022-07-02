const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//name of the DB
db.products = require('./productModel')(sequelize, DataTypes);
db.users = require('./userModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
})

module.exports = db;
