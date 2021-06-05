// node Proxy/index.js
const path = require("path");
const Fs_proxy = require("./fs-proxy");

const fs = new Fs_proxy(require("fs"));
const txtFile = path.join(__dirname, "Readme.txt");
const mdFile = path.join(__dirname, "Readme.md");

fs.readFile(mdFile, "UTF-8", (err, res) => {
    if(err) {
        console.log("\x07");
        console.error(err);
        process.exit(0);
    }
    console.log("reading...");
    console.log(res);
});

fs.readFile(txtFile, "UTF-8", (err, res) => {
    if(err) {
        console.log("\x07");
        console.error(err);
        process.exit(0);
    }
    console.log("reading...");
    console.log(res);
});