const fromXml = function (xml, arrayTags) {
	let dom = null;
	if (window.DOMParser) dom = new DOMParser().parseFromString(xml, 'text/xml');
	else if (window['ActiveXObject']) {
		dom = new window['ActiveXObject']('Microsoft.XMLDOM');
		dom.async = false;
		if (!dom.loadXML(xml)) throw dom.parseError.reason + ' ' + dom.parseError.srcText;
	} else throw new Error('cannot parse xml string!');

	function parseNode(xmlNode, result) {
		if (xmlNode.nodeName == '#text') {
			let v = xmlNode.nodeValue;
			if (v.trim()) result['#text'] = v;
			return;
		}

		let jsonNode = {},
			existing = result[xmlNode.nodeName];
		if (existing) {
			if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];
			else result[xmlNode.nodeName].push(jsonNode);
		} else {
			if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) result[xmlNode.nodeName] = [jsonNode];
			else result[xmlNode.nodeName] = jsonNode;
		}

		if (xmlNode.attributes)
			for (let attribute of xmlNode.attributes) jsonNode[attribute.nodeName] = attribute.nodeValue;

		for (let node of xmlNode.childNodes) parseNode(node, jsonNode);
	}

	let result = {};
	for (let node of dom.childNodes) parseNode(node, result);

	return result;
};

export { fromXml };
