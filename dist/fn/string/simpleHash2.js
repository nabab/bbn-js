var simpleHash2 = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
};
export { simpleHash2 };
