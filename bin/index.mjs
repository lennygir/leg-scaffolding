#! /usr/bin/env node
import Command from './command.mjs';
import CommandSet from './commandSet.mjs';

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

CommandSet.exec(process.argv);