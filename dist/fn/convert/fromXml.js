/**
 * Parses XML and returns an object.
 *
 * Picked from https://stackoverflow.com/questions/4200913/xml-to-javascript-object
 *
 * @memberof bbn.fn
 * @param   {String} xml       The XML to be parsed
 * @param   {Array}  arrayTags An array of tag names which should always be returned as array (even if single)
 * @returns {Object}
 */
var fromXml = function (xml, arrayTags) {
    var dom = null;
    if (window.DOMParser)
        dom = new DOMParser().parseFromString(xml, "text/xml");
    else if (window["ActiveXObject"]) {
        dom = new window["ActiveXObject"]("Microsoft.XMLDOM");
        dom.async = false;
        if (!dom.loadXML(xml))
            throw dom.parseError.reason + " " + dom.parseError.srcText;
    }
    else
        throw new Error("cannot parse xml string!");
    function parseNode(xmlNode, result) {
        if (xmlNode.nodeName == "#text") {
            var v = xmlNode.nodeValue;
            if (v.trim())
                result["#text"] = v;
            return;
        }
        var jsonNode = {}, existing = result[xmlNode.nodeName];
        if (existing) {
            if (!Array.isArray(existing))
                result[xmlNode.nodeName] = [existing, jsonNode];
            else
                result[xmlNode.nodeName].push(jsonNode);
        }
        else {
            if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1)
                result[xmlNode.nodeName] = [jsonNode];
            else
                result[xmlNode.nodeName] = jsonNode;
        }
        if (xmlNode.attributes)
            for (var _i = 0, _a = xmlNode.attributes; _i < _a.length; _i++) {
                var attribute = _a[_i];
                jsonNode[attribute.nodeName] = attribute.nodeValue;
            }
        for (var _b = 0, _c = xmlNode.childNodes; _b < _c.length; _b++) {
            var node = _c[_b];
            parseNode(node, jsonNode);
        }
    }
    var result = {};
    for (var _i = 0, _a = dom.childNodes; _i < _a.length; _i++) {
        var node = _a[_i];
        parseNode(node, result);
    }
    return result;
};
export { fromXml };
