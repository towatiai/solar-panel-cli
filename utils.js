const chalk = require("chalk");

module.exports = {
    colorForPercentage(p) {
        return p < 50 ? chalk.green(p + '%') :
            p < 75 ? chalk.yellow(p + '%') :
                p < 90 ? chalk.red(p + '%') :
                    chalk.bgRed(p + '%');
    },

    colorForPercentageDecr(p) {
        return p > 75 ? chalk.green(p + '%') :
            p > 35 ? chalk.yellow(p + '%') :
                p > 10 ? chalk.red(p + '%') :
                    chalk.bgRed(p + '%');
    },

    range: function* (start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }
}