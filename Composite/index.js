// node Composite/index.js

const CatalogGroup = require("./catalog-group");
const CatalogItem = require("./catalog-item");

const chappals = new CatalogItem("Chappals", 250);
const baniyan = new CatalogItem("Baniyan", 150);

const kapde = new CatalogGroup("Kapde", [chappals, baniyan]);

kapde.print();