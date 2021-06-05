const path = require("path");

class Fs_proxy {

    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    readFile(path, format, callback) {
        if(!path.match(/.md$|.MD$/)) { // only reads .md file extension
            return callback(new Error("Can only read Markdown files."));
        }

        this.fs.readFile(path, format, (err, res) => {
            if(err) {
                console.error(err);
                return callback(err);
            }

            return callback(null, res);
        })
    }
}

module.exports = Fs_proxy;