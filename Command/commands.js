const { writeFileSync, unlink } = require("fs");
const { join } = require("path");

class ExitCommand {
    execute() {
        console.log("Exiting...");
        process.exit(0);
    }
}

class CreateCommand {

    constructor(fileName, text) {
        this._filePath = join(__dirname, fileName);
        this._text = text;
        this._logs = []
    }

    execute() {
        console.log("Creating file...");
        writeFileSync(this._filePath, this._text);
        this._logs.push(["create", this._fileName, this._text]);
    }

    undo() {
        console.log("Removing file...");
        unlink(this._filePath, (err, res) => {
            if(err) {
                return console.log("Error deleting file.");
            }
            console.log(res);
        });
    }
}

module.exports = {
    ExitCommand,
    CreateCommand
};