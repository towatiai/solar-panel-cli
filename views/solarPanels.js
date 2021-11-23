const status = require("./status");
const { range } = require("../utils");
const chalk = require("chalk");

module.exports.name = `Home > Building status > Solar Panels`;

module.exports.actions = {
    "Go back": status
}

const panels = [...range(1, 4)].map(i => {
    const cond = Math.round(Math.random() * 100);
    return {
        name: "Panel " + i,
        production: (1 + Math.random() * 3).toFixed(2),
        condition: `${cond}% ${cond > 30 ? chalk.green("OK") : chalk.red("REPLACE")}`
    }
});

module.exports.run = () => {

    console.log("Name\t   Production (24h)\tCondition")
    panels.forEach(p => {
        console.log(`${p.name} \t${p.production} KWh\t${p.condition}`)
    });
    console.log("");
}