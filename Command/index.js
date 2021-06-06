// Item comes with instructions for installer to run
// node Command/index.js

const { createInterface } = require("readline");
const { ExitCommand, CreateCommand } = require("./commands");
const Conductor = require("./conductor");

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const conductor = new Conductor();

console.log('create <fileName> <text> | undo | redo | history | exit');
rl.prompt();
rl.on('line', input => {
    const [ commandText, fileName, ...fileText ] = input.split(" ");
    const text = fileText.join(" ");
    switch (commandText) {
        case "exit":
            conductor.run(new ExitCommand());
        case "create":
            conductor.run(new CreateCommand(fileName, text));
            break;
        case "undo":
            conductor.undo();
            break;
        case "redo":
            conductor.redo();
            break;
        case "history":
            conductor.history();
            break;
        default:
            console.log("Command not found. Try again...");
            break;
    }
    rl.prompt();
});