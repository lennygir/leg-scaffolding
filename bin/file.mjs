import { spawn } from 'child_process';
import fs from 'fs';
import { replaceInBuffer } from '../utils/buffer.mjs';

const REPLACER = {
    'Xxxxx': (text) => text[0].toUpperCase() + text.slice(1).toLowerCase(),
    'xxxxx': (text) => text.toLowerCase()
};

function generate(endPath, templatePath, type, name) {
    fs.readFile(`${templatePath}/../../templates/${type}.txt`, (error, data) => {
        if(error) {
            if(error.errno === -4058) {
                throw new Error('\nLeg: Please specify a correct type: interceptor, repository, middleware or controller.\n');
            } else {
                throw error;
            }
        } 
        for(const toReplace in REPLACER) {
            data = replaceInBuffer(data, toReplace, REPLACER[toReplace](name));
        }
        fs.writeFile (`${endPath}/${name}${type[0].toUpperCase() + type.slice(1).toLowerCase()}.ts`, data, (error) => {
            if(error) {
                throw error;
            }
            console.log(`\nLeg: ${name}${type[0].toUpperCase() + type.slice(1).toLowerCase()}.ts has been generated\n`);
        });
    });
}

function init() {
    spawn('npm', ['init'], {
        shell: true,
        stdio: 'inherit'
    });
}

export { generate, init };