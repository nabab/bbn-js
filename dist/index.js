import { _ } from "./_.js";
import { $ } from "./$.js";
import { lng } from "./lng.js";
import { vars } from "./vars.js";
import { env } from "./env.js";
import { db } from "./db.js";
import { fn } from "./fn.js";
const bbn = {
    version: "1.0.1",
    opt: {
        _cat: {}
    },
    app: {},
    _,
    $,
    lng,
    var: vars,
    env,
    db,
    fn
};
window.bbn = bbn;
export { bbn };