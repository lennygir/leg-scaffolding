// Buffer splice
// If <length> is negative --> remove |length| items at <index>
// Else add <data> |length| times at <index>
function splice(buff, index, length, data) {
    if(length > 0) {
        return Buffer.concat([buff.slice(0, index), buff.slice(index + length, buff.length)]);
    }
    return Buffer.concat([buff.slice(0, index), Buffer.alloc(-length, data), buff.slice(index, buff.length)]);
}

function replaceInBuffer(buff, toReplace, substitute) {
    let index;
    while((index = buff.indexOf(toReplace)) !== -1) {
        // Add or remove space according to substitude length
        buff = splice(buff, index, toReplace.length - substitute.length, 0);
        // Change letters
        for(let i = 0; i < substitute.length; ++i) {
            buff[index + i] = substitute[i].charCodeAt(0);
        }
    }
    return buff;
}

export { replaceInBuffer, splice };