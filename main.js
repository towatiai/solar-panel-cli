const inquirer = require('inquirer');
const chalk = require("chalk");
const home = require("./views/home");

let context = home;

(async() => {
    while (true) {
        console.clear();
    
        console.log(chalk.yellowBright(context.name).padEnd(process.stdout.columns - 14) + (new Date).toLocaleString() + "\n");
        await context.run();

        if (context.prompt) {
            const ans = await inquirer.prompt(context.prompt);
            context = await context.after(ans);
            continue;
        }

        console.log(chalk.gray('-'.repeat(process.stdout.columns)));

        const answers = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'Menu',
            choices: Object.keys(context.actions),
        });
        if (answers.action == "Exit") {
            break;
        }

        context = context.actions[answers.action];

        //console.log(JSON.stringify(answers, null, '  '));
    }
})();