export default class {
    static #ListOfCommands = [];

    static add(cmd) {
        this.#ListOfCommands.push(cmd);
    }

    static exec(args) {
        let command, action, helpPosition;
        if((helpPosition = args.indexOf('-h')) != -1 || (helpPosition = args.indexOf('--help')) != -1) {
            action = 'help';
            command = this.#ListOfCommands.find((cmd) => cmd.hasCommand(args[helpPosition - 1]));
        } else {
            action = 'exec';
            command = this.#ListOfCommands.find((cmd) => cmd.hasCommand(args[2]));
        }
        if(command) {
            if(action === 'exec') {
                command.run();
            } else {
                command.display();
            }
        } else {
            this.displayListOfCommands();
        }
    }

    static displayListOfCommands() {
        console.log('\nUsage: leg <command> [<options>]');
        console.log('\nWhere <command> is one of:');
        for(const command of this.#ListOfCommands) {
            console.log('\t- ' + command.getCommands());
        }
        console.log('\nUse leg <command> -h or leg <command> --help to get more information on any command\n');
    }
}