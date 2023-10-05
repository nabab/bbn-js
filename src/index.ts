import {_} from './_';
import {$} from './$';
import {lng} from './lng';
import {vars} from './vars';
import {env} from './env';
import {db} from './db';
import {fn} from './fn';

const bbn: Bbn = {
  version: "1.0.1",
  opt: {
    _cat: {}
  },
  app: {
  },
  _,
  $,
  lng,
  var: vars,
  env,
  db,
  fn
};

window.bbn = bbn;


export {bbn};

