'use strict';
var db = require('./_db');
module.exports = db;

db.User = require('./models/user');
db.Group = require('./models/group');

db.User.belongsTo(db.Group);
