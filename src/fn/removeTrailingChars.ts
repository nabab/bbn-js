import { substr } from './substr';

const removeTrailingChars = function (st: string, char?: string): string
{
	if (!char) {
		char = ' ';
	}
	if (char.length) {
		while (substr(st, -char.length) === char) {
			st = substr(st, 0, st.length - char.length);
		}
		while (substr(st, 0, char.length) === char) {
			st = substr(st, char.length);
		}
	}
	return st;
};

export { removeTrailingChars };