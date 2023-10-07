import { _ } from './_.ts';
import { $ } from './$.ts';
import { lng } from './lng.ts';
import { vars } from './vars.ts';
import { env } from './env.ts';
import { db } from './db.ts';
import { fn } from './fn.ts';

const bbn = {
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

window['bbn'] = bbn;


export {bbn};

