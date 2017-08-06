const chalk = require('chalk');

function Human(attrs) {
  attrs = attrs || {};
  let name = attrs.name;
  let age = attrs.age;
  let sex = attrs.sex;
  let skills = attrs.skills || {};

  Human.learnSkill = function(skill, level) {
    skills = level;
  }

  Human.checkSkill = function(skill) {
    return skills;
  }

  Human.toColoredString = function() {
    console.log(chalk.red(name));
    console.log(chalk.blue(age));
    console.log(chalk.green(sex));
    console.log(chalk.yellow(skills));
  };
}

module.exports = Human;
