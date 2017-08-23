const express = require('express');
const router = express.Router();

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

router.get('/:id/edit', function(req, res, next) {
  const _id = req.params;
  User.findById(_id.id).then(User => {
    res.render("users_edit", { data: User});
})
});

router.post("/:id/edit", function(req, res, next){
  const { name, last} =  req.body;
  const _id = req.params;
  User.findById(_id.id).then(User => {
    User.firstName = name;
    User.lastName = last;
    User.save().then(() => {
      res.render("users_details", { data: User});
    })
  })
});

router.get("/:id", function(req, res, next) {
  const _id = req.params;
  User.findById(_id.id).then(User => {
    res.render("users_details", { data: User});
})
});

router.get("/:id/delete", function(req, res, next) {
  const _id = req.params;
  User.findById(_id.id).then((result) => {
        return result.destroy({ where: {}})
            .then((u) => { User.findAll().then((users) => {
              res.render("users_list", { data: users});
            }); });
    });
});



module.exports = router;
