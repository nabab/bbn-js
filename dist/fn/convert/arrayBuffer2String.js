var arrayBuffer2String = function (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
};
export { arrayBuffer2String };
