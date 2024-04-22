export default function arrayBuffer2String(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}
;
