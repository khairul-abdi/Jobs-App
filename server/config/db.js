const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("node_login", "root", "", {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.form = require('../models/form.model.js')(sequelize, Sequelize);
db.files = require('../models/file.model.js')(sequelize, Sequelize);

db.form.hasMany(db.files, { as: 'files', foreignKey: 'formId', sourceKey: 'id'})
db.files.belongsTo(db.form, {
  foreignKey: 'formId',
  targetKey: 'id',
  as: 'form'
})

module.exports = db