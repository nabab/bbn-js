import { getCssVar } from './getCssVar' ;
import { each } from '../loop/each' ;

const resize = function ()
{
	let diffW = bbn.env.width !== window.innerWidth;
	let diffH = bbn.env.height !== window.innerHeight;
	if (diffW || diffH) {
		if (diffW) {
			bbn.env.width =
				window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
			document.documentElement.style.setProperty('--vw', bbn.env.width * 0.01 + 'px');
		}
		if (diffH) {
			bbn.env.height =
				window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
			document.documentElement.style.setProperty('--vh', bbn.env.height * 0.01 + 'px');
		}

		let smallWidth = parseInt(getCssVar('mobile-limit')) || 650;
      
		let newCls = 'bbn-screen-' + (bbn.env.width < smallWidth ? 'small' : 'regular');
		let classes = (document.body.className || '').split(' ');
		let done = false;
		each(classes, (cls, idx) => {
			let bits = cls.split('-');
			if (bits.length === 3 && cls.indexOf('bbn-screen-') === 0) {
				done = true;
				if (cls !== newCls) {
					classes.splice(idx, 1, newCls);
				}
				return false;
			}
		});
		if (!done) {
			classes.push(newCls);
		}

		bbn.fn.defaultResizeFunction();
		document.body.className = classes.join(' ');
	}
};

export { resize };
