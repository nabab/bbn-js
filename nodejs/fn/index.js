const ajax = require('./ajax');
const form = require('./form');
const history = require('./history');
const init = require('./init');
const locale = require('./locale');
const misc = require('./misc');
const object = require('./object');
const size = require('./size');
const string = require('./string');
const style = require('./style');
const type = require('./type');

module.exports = {
  ...type, ...style, ...ajax, ...form, ...history, ...init, ...locale, ...misc, ...object, ...size, ...string
};