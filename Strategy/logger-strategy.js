const { appendFile } = require("fs");
const { join } = require("path");

class LoggerStrategy {
    static toConsole(timeStamp, message) {
        console.log(timeStamp, message);
    }
    
    static noDate(timeStamp, message) {
        console.log(message);
    }
    
    static toFile(timeStamp, message) {
        const filePath = join(__dirname, "logs.txt");
        appendFile(filePath, `${timeStamp} - ${message}\n`, err => {
            if(err) console.error(err)
        });
    }
    
    static none(timeStamp, message) {}
}

module.exports = LoggerStrategy;