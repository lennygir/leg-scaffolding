import CommandSet from './commandSet.mjs';

export default class {

    #cmd;
    #desc;
    #opt;
    #exec;
    
    constructor() {
        this.#cmd = [];
        this.#opt = [];
    }

    command(cmd) {
        this.#cmd.push(cmd);
        return this;
    }

    execute(exec = () => {console.log('\nLeg: No instructions have been specified for this command\n');}) {
        this.#exec = exec;
        return this;
    }

    run() {
        this.#exec();
        return this;
    }

    description(desc) {
        this.#desc = desc;
        return this;
    }

    option(opt, desc) {
        this.#opt.push({opt, desc});
        return this;
    }

    save() {
        CommandSet.add(this);
    }

    hasCommand(cmd) {
        return this.#cmd.includes(cmd);
    }

    display() {
        console.log(`\nleg ${this.#cmd[0]}`);
        if(this.#cmd.length > 0) {
            console.log(`Aliases: ${this.#cmd.filter((_, i) => i > 0).join(', ')}`);
        }
        console.log(`\nUsage: ${this.#desc}`);
        if(this.#opt.length > 0) {
            console.log(`\nParameters:\n${this.#opt.map(element => {
                return '\t' + element.opt + ': ' + element.desc;
            }).join('\n')}`);
        }
        console.log('');
    }

    getCommands() {
        return this.#cmd.join(', ');
    }
}