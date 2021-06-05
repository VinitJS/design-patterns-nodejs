// node Decorator/index.js

const { Item, GoldItem, DiamondItem } = require("./necklace");
const Shopper = require("./shopper");

const necklace = new Item("necklace", 100);
const goldNecklace = new GoldItem(necklace);
const diamondGoldNecklace = new DiamondItem(goldNecklace);

const vinit = new Shopper("Vinit", 10000);
vinit.purchase(necklace);
vinit.print();

vinit.purchase(goldNecklace);
vinit.print();

vinit.purchase(diamondGoldNecklace);
vinit.print();