/**
 * CRC32 implementation.
 */
const crc32Table = [];
for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crc32Table.push(c);
}
const crc32 = function (str) {
    let crc = 0 ^ -1;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        crc = (crc >>> 8) ^ crc32Table[(crc ^ charCode) & 0xff];
    }
    return (crc ^ -1) >>> 0; // Make sure the result is a 32-bit positive integer
};
export { crc32 };
