const LoggerStrategy = require("./logger-strategy");

class Logger {
    constructor(strategy = "toConsole") {
        this.logs = [];
        this.strategy = LoggerStrategy[strategy];
    }

    changeStrategy(strategy) {
        this.strategy = LoggerStrategy[strategy];
    }

    printAllLogs() {
        console.log(this.logs);
    }

    log(message) {
        const timeStamp = new Date().toISOString();
        this.logs.push([timeStamp, message]);
        this.strategy(timeStamp, message);
    }
}

module.exports = Logger;