import { Axios } from 'axios';
import { Dayjs } from 'dayjs';
import { _ } from './_.js';
import { $ } from './$.js';
import { lng } from './lng.js';
import { vars } from './vars.js';
import { env } from './env.js';
import { db } from './db.js';
import { fn } from './fn.js';
var bbn = {
    version: "1.0.1",
    opt: {
        _cat: {}
    },
    app: {},
    _: _,
    $: $,
    lng: lng,
    var: vars,
    env: env,
    db: db,
    fn: fn
};
window['bbn'] = bbn;
export { bbn, Axios, Dayjs };
