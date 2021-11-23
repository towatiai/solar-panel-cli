const home = require("./home");
const chalk = require("chalk");
const {colorForPercentageDecr} = require("../utils");
const apartments = require("./apartments");
const solarPanels = require("./solarPanels");
const batteries = require("./batteryStatus");

module.exports.name = `Home > Building status`;

module.exports.actions = {
    "Distribution by apartments": apartments,
    "Solar panel status": solarPanels,
    "Battery status": batteries,
    "Go back": home
}

module.exports.run = () => {

    console.log(chalk.blue("Building's energy status for the past 7 days\n"));
    console.log(`Solar Produced:\t 1542 kWh ${chalk.green("+7.4%")}
From power gird: 489 kWh ${chalk.green("-2.6%")}
Consumption:\t 2031 kWh ${chalk.red("+1.2%")}
    `);
    console.log(`Current battery status: 24.7 kWh | ${colorForPercentageDecr(76.5)}`)
}