const html2text = function (st): string
{
	let $test = document.createElement('div');
	$test.innerHTML = st;
	st = $test.innerText;
	return st;
};

export { html2text };
