import { numProperties } from './numProperties';
import { iterate } from './iterate';

const addColors = function (colors: object) {
	if (numProperties(colors)) {
		if (!bbn.vars.colors) {
			bbn.vars.colors = {};
		}
		let element = document.createElement('style');
		document.head.appendChild(element);
		let sheet = element.sheet;
		// Append style element to head
		let i = 0;
		iterate(colors, (v, n) => {
			bbn.vars.colors[n] = v;
			sheet.insertRule('.bbn-' + n + ', .bbn-color-text-' + n + ' {color: ' + v + ' !important;}', i);
			sheet.insertRule(
				'svg.bbn-' +
					n +
					', .bbn-' +
					n +
					' svg, svg.bbn-color-text-' +
					n +
					', .bbn-color-text-' +
					n +
					' svg {fill: ' +
					v +
					';}',
				i
			);
			sheet.insertRule(
				'.bbn-bg-' +
					n +
					', .bbn-color-bg-' +
					n +
					', .bbn-color-background-' +
					n +
					' {background-color: ' +
					v +
					' !important;}',
				i
			);
			sheet.insertRule(
				'.bbn-border-' + n + ', .bbn-color-border-' + n + ' {border-color: ' + v + ' !important;}',
				i
			);
			sheet.insertRule(
				'.bbn-color-' + n + ' {border-color: ' + v + '; background-color: ' + v + '; color: ' + v + ';}',
				i
			);
		});
	}
};

export { addColors };
