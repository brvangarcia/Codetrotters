var express = require('express');
var router = express.Router();

const {User} = require("../models");

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then((users) => {
    res.render("users_list", { data: users});
  });
});

router.post('/create', function(req, res, next) {
  const {name, last} = req.body;
  User.create({firstName: name, lastName: last}).then((user) => {
  res.render("users_details", {data: user});
});
});

router.get('/create', function(req, res, next) {
    res.render("users_create");
});

router.post('/edit', function(req, res, next) {
  const {name, last} = req.body;
  User.edit({firstName: name, lastName: last}).then((user) => {
  res.render("users_details", {data: user});
});
});

router.get('/:id', function(req, res, next) {
  console.log(User.users);
  res.render("users_details", {
    data: User[`/:id`],
  });
});



module.exports = router;
