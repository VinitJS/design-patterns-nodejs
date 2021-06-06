class Conductor {

    constructor() {
        this._history = [];
        this._undone = [];
    }

    run(commandObj) {
        commandObj.execute();
        this._history.push(commandObj);
    }

    printHistory() {
        this._history.forEach(h => console.log(h));
    }

    undo() {
        const command = this._history.pop();
        command.undo();
        this._undone.push(command);
    }

    redo() {
        const command = this._undone.pop();
        command.execute();
        this._history.push(command);
    }

    history() {
        console.log(this._history);
    }
}

module.exports = Conductor;