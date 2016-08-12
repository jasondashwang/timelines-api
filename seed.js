/*

To establish the database connection use:
--- server/db/index.js

The name of the database used is set in:
--- env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./db');
var User = db.model('user');
var Group = db.model('group');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            deviceId: 'abc123',
            password: 'password'
        },
        {
            email: 'admin@gmail.com',
            deviceId: '456',
            password: 'admin'
        },
        {
            email: 'obama@gmail.com',
            deviceId: '789',
            password: 'potus'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedGroups = function () {

    var groups = [
        {
            name: 'First Group',
            expirationDate: '2017-12-30'
        }
    ];

    var creatingGroups = groups.map(function (groupObj) {
        return Group.create(groupObj);
    });

    return Promise.all(creatingGroups);

};

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(() => seedGroups())
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
