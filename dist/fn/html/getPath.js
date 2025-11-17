/**
 * @method   getPath
 * @todo     Add method description for getPath
 * @global
 * @ignore
 * @memberof bbn.fn
 * @returns  {*}
 */
export default function getPath(element) {
    let path = '', 
    //node = $(element),
    node = element;
    if (element.id) {
        return '#' + element.id;
    }
    while (node && (node !== document.body)) {
        //let realNode = node[0],
        let realNode = node, name = realNode.localName, done = 0;
        if (!name)
            break;
        if (realNode === document.body)
            break;
        if (realNode.id) {
            path = '#' + realNode.id + '>' + path;
            done = 1;
        }
        //var parent = node.parent(),
        let parent = node.parentNode, 
        //sameTagSiblings = parent.children(name);
        sameTagSiblings = Array.from(parent.children).filter((val) => {
            return val.tagName === realNode.tagName;
        });
        if (!done && sameTagSiblings.length > 1) {
            //var allSiblings = parent.children(),
            let allSiblings = Array.from(parent.children), 
            //index = allSiblings.index(realNode) + 1;
            index = allSiblings.indexOf(realNode) + 1;
            if (index > 1) {
                name += ':nth-child(' + index + ')';
            }
        }
        path = name + (path ? '>' + path : '');
        node = parent;
    }
    return path;
}
;
