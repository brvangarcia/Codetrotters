const chalk = require('chalk');
const prompt = require('prompt-sync')();
const Human = require('./components/app');
const defaultHuman = require('./components/app')

let attrs = {};
attrs.name = prompt('name = ');
attrs.age = Number(prompt('age = '));
attrs.sex = prompt('sex = ');

let totalSkills = prompt('number of skills = ');

let human = new Human(attrs);

for (var i = 0; i < totalSkills; i++) {
  let skill = prompt((i + 1) + '. skill = ');
  let level = prompt((i + 1) + '. level = ');
  Human.learnSkill(skill, level);
}
Human.toColoredString();
