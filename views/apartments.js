const status = require("./status");
const { colorForPercentage } = require("../utils");
const {range} = require("../utils");

module.exports.name = `Home > Building status > Apartments`;

module.exports.actions = {
    "Go back": status
}

const apartments = [...range(1, 7)].map(i => ({
    name: "Apartment " + i,
    consumption: (5 + Math.random() * 5).toFixed(2),
    quota: Math.round(Math.random() * 100)
}))

module.exports.run = () => {

    console.log("Name\t  Consumption (7 days)\tUsed quota")
    apartments.forEach(a => {
        console.log(`${a.name}\t${a.consumption} KWh\t${colorForPercentage(a.quota)}`)
    });
    console.log("")
}