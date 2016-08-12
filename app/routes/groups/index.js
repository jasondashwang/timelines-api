'use strict';
var router = require('express').Router();
module.exports = router;
var db = require('../../../db');
var Group = db.Group;

router.post('/', (req, res, next) => {
  Group.create(req.body)
  .then(group => res.send(group))
  .catch(next)
});
