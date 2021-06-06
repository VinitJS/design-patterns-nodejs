const Inventoryitem = require("./inventory-item");
const Iterator = require("./iterator");

require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let inventory = new Iterator([
    new Inventoryitem("Cycle", 3000),
    new Inventoryitem("Kettle", 2000),
    new Inventoryitem("Sugar", 200),
    new Inventoryitem("Jeans", 3000),
    new Inventoryitem("Burger", 30)
]);

process.stdin.on("keypress", (str, key) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    switch (key.name) {
        case "right":
            inventory.last().writeLn();
            break;
        case "left":
            inventory.first().writeLn();
            break;
        case "up":
            inventory.prev().writeLn();
            break;
        case "down":
            inventory.next().writeLn();
            break;
        case "c":
            if(key.ctrl) {
                process.exit();
            }
            break;
        default:
            process.stdout.write(key.name);
            break;
    }
});