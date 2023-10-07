import { replaceAll } from '../string/replaceAll.js';
/**
 * @method   getPath
 * @todo     Add method description for getPath
 * @global
 * @ignore
 * @memberof bbn.fn
 * @returns  {*}
 */
var getPath = function (element) {
    var path, 
    //node = $(element),
    node = element, done = 0;
    var _loop_1 = function () {
        //let realNode = node[0],
        var realNode = node, name_1 = realNode.localName;
        if (!name_1)
            return "break";
        if (realNode === document.body)
            return "break";
        if (realNode.id) {
            return { value: '#' + realNode.id };
        }
        if (!done) {
            if (realNode.className && realNode.className !== ' ') {
                name_1 += '.' + replaceAll(' ', '.', replaceAll('  ', ' ', realNode.className));
            }
            done = 1;
        }
        //var parent = node.parent(),
        var parent_1 = node.parentNode, 
        //sameTagSiblings = parent.children(name);
        sameTagSiblings = parent_1.children.filter(function (val) {
            return val.tagName === name_1;
        });
        if (sameTagSiblings.length > 1) {
            //var allSiblings = parent.children(),
            var allSiblings = parent_1.children, 
            //index = allSiblings.index(realNode) + 1;
            index = allSiblings.indexOf(realNode) + 1;
            if (index > 1) {
                name_1 += ':nth-child(' + index + ')';
            }
        }
        path = name_1 + (path ? '>' + path : '');
        node = parent_1;
    };
    while (node.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
        if (state_1 === "break")
            break;
    }
    return path;
};
export { getPath };
