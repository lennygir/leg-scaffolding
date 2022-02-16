#! /usr/bin/env node

// Imports
const packagejson = require('../package.json');
const { exec } = require('child_process');
const generate = require('./generate.ts');

// Arguments
const [,, ...argv] = process.argv

// Logic
if(argv.length > 0) {
    switch(argv[0]) {
        case "init": 
            
            break;
        case "generate": case "g": 
            generate(argv.slice(1));
            break;
        default:
            throw new Error("Unknown command " + argv[0]);
    }
} else {
    console.log("You are using " + packagejson.name + " v" + packagejson.version);
}