#! /usr/bin/env node
import Command from './command.mjs';
import CommandSet from './commandSet.mjs';
import { generate } from './file.mjs';

(new Command())
    .command('version')
    .command('v')
    .description('Get the current version of this tool')
    .execute(() => {
        console.log('\nLeg: You are currently using the version 1.0.0.\n');
    })
    .save();

(new Command())
    .command('doc')
    .command('d')
    .description('Get documentation about the rest-api-node-template and leg')
    .execute(() => {
        console.log('\nLeg: \n\
        rest-api-node-template: https://github.com/lennygir/rest-api-node-template\n\
        leg: https://github.com/lennygir/leg-scaffolding.\n');
    })
    .save();

(new Command())
    .command('generate')
    .command('g')
    .description('Generate a template file for your API')
    .option('type', 'Specify the type of your component. It can be: controller, middleware, interceptor or repository')
    .option('name', 'Specify the name of your component')
    .execute(() => {
        if(process.argv.length < 4) {
            console.log('\nLeg: Please specify a type and a name: leg generate|g <type> <name>.\n');
        } else if(process.argv.length < 5) {
            console.log('\nLeg: Please specify a name: leg generate|g <type> <name>.\n');
        }
        generate(process.cwd(), process.argv[1], process.argv[3], process.argv[4]);
    })
    .save();

CommandSet.exec(process.argv);
