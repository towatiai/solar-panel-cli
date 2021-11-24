const home = require("./home");
const chalk = require("chalk");
const {colorForPercentage} = require("../utils");

const total = (2+ Math.random() * 7).toFixed(2);
const apartment = {
    total: total,
    quota: 9.0,
    items: {
        "Refrigeration": total * 0.15,
        "Cooking": total * 0.16,
        "Electronics": total * 0.24,
        "Laundry": total * 0.05,
        "Lighting": total * 0.22,
        "Other   ": total * 0.18
    }
}

module.exports.name = `Home > My apartment status`;

module.exports.actions = {
    "Change quota": {
        name: "Home > My apartment status > Changing quota",
        prompt: [{
            type: "input",
            name: "quota",
            message: "Insert new daily quota (KWh):",
            validate(value) {
                value = parseFloat(value);
                const valid = !isNaN(value) && value > 0 && value < 20;
                return valid || 'Quota must be positive number, but less than 20 kWh.';
            }
        }, {
            type: 'confirm',
            name: 'confirmation',
            message: ans => `This will change your apartment's 24 hour quota from ${apartment.quota} kWh to ${ans.quota} kWh? Do you wish to continue?`,
            default: false,
          }, {
            type: 'list',
            name: 'action',
            message: ans => ans.confirmation ? 'Quota successfully changed.' : 'Canceled by user. Quota will not be changed.',
            choices: ["Ok"]
        }],
        run() {
            console.log(chalk.blue("Apartment 5: Quota\n"))
            console.log("Current quota: 9 kWh/day");
            console.log(`Average usage: ${chalk.red("108%")}\n`)
            console.log("Changing apartment's solar power quota will affect the apartment's compensation costs. Changes will come into effect for the following day.\n");
        },
        after(value) {
            console.log(value);
            return module.exports;
        }
    },
    "Go back": home
}

module.exports.run = () => {

    console.log(chalk.blue("Apartment 5: Daily energy consumption\n"));
    console.log(chalk.yellow(`Today's total:\t${apartment.total} KWh`));
    console.log(`From solar power: ${apartment.total} KWh${chalk.gray(`/${apartment.quota}KWh`)}`)
    console.log("From power grid: 0 KWh\n")

    Object.entries(apartment.items).map(([key, value]) => {
        const change = (Math.random() * 20 - 10).toFixed(1);
        console.log(`${key} \t${value.toFixed(2)} KWh ${change > 0 ? chalk.red(`+${change}%`):chalk.green(`${change}%`)}`);
    });

    console.log("");
    console.log(`\n${(colorForPercentage((apartment.total/apartment.quota*100).toFixed(2)))} used from daily quota. \nElectricity consumption over the quota will be billed according to power grid pricing.\n`);
};