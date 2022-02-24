import fs from 'fs';

const REPLACER = {
    'Xxxxx': (text) => text[0].toUpperCase() + text.slice(1).toLowerCase(),
    'xxxxx': (text) => text.toLowerCase()
}

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
    return buff
}

function generate(endPath, templatePath, type, name) {
    console.log(endPath);
    fs.readFile(`${templatePath}/../../templates/${type}.txt`, (error, data) => {
        if(error) {
            if(error.errno === -4058) {
                throw new Error('\nLeg: Please specify a correct type: interceptor, repository, middleware or controller.\n');
            } else {
                throw error;
            }
        } 
        // Replace dynamic data (names)
        for(const toReplace in REPLACER) {
            data = replaceInBuffer(data, toReplace, REPLACER[toReplace](name));
        }
        // ...
        fs.writeFile (`${endPath}/${name}${type[0].toUpperCase() + type.slice(1).toLowerCase()}.ts`, data, (error) => {
            if(error) {
                throw error;
            }
            console.log(`\nLeg: ${name}${type[0].toUpperCase() + type.slice(1).toLowerCase()}.ts has been generated\n`);
        });
    })
}

export { generate }