export default function simpleHash2(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
}
;
