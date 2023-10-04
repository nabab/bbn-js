import { createObject } from './createObject';
import { addInputs } from './addInputs';

const postOut = function (url: string, data: BbnBasicObject, success?: () => any, target?: string): void
{
	let form: HTMLFormElement|undefined = document.body.querySelector('form#bbn-form_out');
	if (!form) {
		form = document.createElement('form');
		form.classList.add('bbn-no');
		form.setAttribute('id', 'bbn-form_out');
		form.setAttribute('method', 'post');
		form.setAttribute('enctype', 'multipart/form-data-encoded');
		form.style.display = 'none';
		document.body.appendChild(form);
	}
	form.innerHTML = '';
	form.setAttribute('action', url);
	form.setAttribute('target', target || '_blank');
	if (!data) {
		data = {};
	}
	data = createObject(data);
	if (!data.bbn) {
		data.bbn = 'public';
	}

  addInputs(form, data);
	form.submit();
	if (success) {
		success();
	}
};

export { postOut };
