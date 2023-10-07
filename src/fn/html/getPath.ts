import { replaceAll } from '../string/replaceAll.js'  ;

/**
 * @method   getPath
 * @todo     Add method description for getPath
 * @global   
 * @ignore
 * @memberof bbn.fn
 * @returns  {*} 
 */
const getPath = function (element) {
	let path,
		//node = $(element),
		node = element,
		done = 0;

	while (node.length) {
		//let realNode = node[0],
		let realNode = node,
			name = realNode.localName;

		if (!name) break;
		if (realNode === document.body) break;

		if (realNode.id) {
			return '#' + realNode.id;
		}

		if (!done) {
			if (realNode.className && realNode.className !== ' ') {
				name += '.' + replaceAll(' ', '.', replaceAll('  ', ' ', realNode.className));
			}

      done = 1;
		}
		//var parent = node.parent(),
		let parent = node.parentNode,
			//sameTagSiblings = parent.children(name);
			sameTagSiblings = parent.children.filter((val) => {
				return val.tagName === name;
			});

		if (sameTagSiblings.length > 1) {
			//var allSiblings = parent.children(),
			let allSiblings = parent.children,
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
};

export { getPath };
