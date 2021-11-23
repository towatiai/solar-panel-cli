const status = require("./status");
const { colorForPercentageDecr } = require("../utils");
const {range} = require("../utils");
const chalk = require("chalk");

module.exports.name = `Home > Building status > Batteries`;

module.exports.actions = {
    "Go back": status
}

const batteries = [...range(1, 4)].map(i => ({
    name: "Battery " + i,
    charge: ( Math.random() * 13.5).toFixed(2),
    charging: Math.random() > 0.5
}))

module.exports.run = () => {

    console.log("The building has four PowerWall batteries with capacity of 13.5 kWh each.\n");
    console.log("Name\t\tCharge\t\tStatus")
    batteries.forEach(b => {
        console.log(`${b.name}\t${b.charge} | ${colorForPercentageDecr((b.charge/13.5*100).toFixed(1))}\t${b.charging?chalk.green("Charging"):chalk.red("Depleting")}`)
    });
    console.log("")
}