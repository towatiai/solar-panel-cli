
const status = require("./status");
const apartmentStatus = require("./apartmentStatus");
const chalk = require("chalk");

module.exports.name = "Home";

module.exports.actions = {
    "Building status": status,
    "My apartment status": apartmentStatus,
    "Exit": "exit"
}

module.exports.run = () => {

    console.log(`Welcome to ${chalk.yellow("Solar Panel")}!\n`);
}