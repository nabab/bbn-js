const Window = require('window');
global.window = new Window();



global.$ = require('jquery');
global.document = window.document;

global.document = window.document;
require('./libs/modernizr/modernizr');

global.History = require('history');

global.md5 = require('md5');
window.md5 = md5;
window.History = History;
require('./composer');

//require("./src/css/bbn.less");

module.exports.bbn = bbn;
