const decoder = new TextDecoder();
export default function arrayBuffer2String(buf) {
    return decoder.decode(buf);
}
;
