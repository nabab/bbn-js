const mainVariables = {...require('./_def.js')};
const diacriticVariables = require('./diacritic.js');

module.exports = {
  ...mainVariables, ...diacriticVariables
};