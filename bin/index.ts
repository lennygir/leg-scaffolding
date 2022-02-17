#! /usr/bin/env node

// Imports
const packagejson = require('../package.json');

// Arguments
const [,, ...argv] = process.argv

const commands = {
    "g": {
        "name": "\tg <type> <name> - generate a component of type <type>",
        "parameters": "\t<type>: controller, repository, middleware or interceptor\n\t<name>: name of the component"
    },
    "generate": "",
    "help": "",
    "init": "",
    "version": "",
}

// index
if(argv.length > 0) {
    switch(argv[0]) {
        case "init": 
            
            break;
        case "g": case "generate": 
            generate(argv.slice(1));
            break;
        case "help": 
            help(argv[1]);
            break;
        case "version": 
            version();
            break;
        default:
            throw new Error("Unknown command " + argv[0]);
    }
} else {
    help(argv[1]);
}

/* =====================================================
    Generate
===================================================== */
function generate(argv) {
    console.log(argv);
};

/* =====================================================
    Version
===================================================== */

function version() {
    console.log(`You are using ${Object.keys(packagejson.bin)[0]} v${packagejson.version}`);
}

/* =====================================================
    Help
===================================================== */
function help(command) {
    let binaryName = Object.keys(packagejson.bin)[0];
    if(command !== undefined) {
        console.log(`\n${binaryName} - Help for ${command}:\n\nCOMMAND:\n${commands[command].name}\nPARAMETERS:\n${commands[command].parameters}\n`);
    } else {
        let helpMessage = `\nUsage: ${binaryName} <command>\n\nwhere <command> is one of:\n\t`;
        for(let command of Object.keys(commands)) {
            helpMessage += command + ", ";
        }
        helpMessage = helpMessage.substring(0,helpMessage.length - 2);
        helpMessage += `\n\n${binaryName} help <term>\tsearch for help on <term>\n${binaryName} <term> -h\tsearch for help on <term>\n`;
        console.log(helpMessage);
    }
}