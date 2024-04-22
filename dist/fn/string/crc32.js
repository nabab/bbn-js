/**
 * CRC32 implementation.
 */
var crc32Table = [];
for (var i = 0; i < 256; i++) {
    var c = i;
    for (var j = 0; j < 8; j++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crc32Table.push(c);
}
export default function crc32(str) {
    var crc = 0 ^ -1;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        crc = (crc >>> 8) ^ crc32Table[(crc ^ charCode) & 0xff];
    }
    return (crc ^ -1) >>> 0; // Make sure the result is a 32-bit positive integer
}
;
