import { exec, spawn } from 'child_process';
import fs from 'fs';
import { replaceInBuffer } from '../utils/buffer.mjs';
import { copyRecursiveSync } from '../utils/file.mjs';

const REPLACER = {
    'Xxxxx': (text) => text[0].toUpperCase() + text.slice(1).toLowerCase(),
    'xxxxx': (text) => text.toLowerCase()
};

function generate(endPath, templatePath, type, name) {
    fs.readFile(`${templatePath.replace('/leg', '')}/../lib/node_modules/@lennygir/leg-scaffolding/templates/modules/${type}.txt`, (error, data) => {
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
        fs.writeFile(`${endPath}/${name}${type[0].toUpperCase() + type.slice(1).toLowerCase()}.ts`, data, (error) => {
            if(error) {
                throw error;
            }
            console.log(`\nLeg: ${name}${type[0].toUpperCase() + type.slice(1).toLowerCase()}.ts has been generated\n`);
        });
    });
}

function init(endPath, templatePath) {
    console.log('\nLeg: Generating a new project :');
    let init = spawn('npm', ['init'], {
        shell: true,
        stdio: 'inherit'
    });
    init.on('close', async () => {
        console.log('\n\t[\x1b[32mV\x1b[0m] Package.json created...');
        exec('npm i --save-dev tslint', () => {
            console.log('\t[\x1b[32mV\x1b[0m] Libraries installed...');
        });
        await copyRecursiveSync(`${templatePath.replace('/leg', '')}/../lib/node_modules/@lennygir/leg-scaffolding/templates/project/`, `${endPath}/`);
        console.log('\t[\x1b[32mV\x1b[0m] files generated...');
    });
}

export { generate, init };