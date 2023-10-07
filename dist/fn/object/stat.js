const stat = function (returnStat) {
    return;
    /*
    if (bbn.env.logging) {
        var logs = bbn.vars.loggers;
        for (var i = 0; i < arguments.length; i++) {
            var a = arguments[i],
                type = typeof a;
            if (type === 'boolean' || type === 'undefined') {
                break;
            } else {
                if (type === 'object') {
                    a = getPath(a);
                } else {
                    a = a.toString();
                }
                if (!logs[a]) {
                    logs[a] = {
                        _num: 0,
                    };
                }
                logs[a]._num++;
                logs = logs[a];
            }
        }
        if (arguments[arguments.length - 1] === true) {
            var treat = function (obj) {
                var v = {};
                for (var n in obj) {
                    if (n.indexOf('_') !== 0) {
                        v[n + '(' + obj[n]._num + ')'] = treat(obj[n]);
                    }
                }
                return v;
            };
            return treat(logs);
        }
        if (arguments[arguments.length - 1] === false) {
            for (var n in logs) {
                delete logs[n];
            }
            logs._num = 0;
            return;
        }
        return returnStat;
    }
    */
};
export { stat };
