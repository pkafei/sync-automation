/* Takes Weekly Sync Notes and Turns Them into PR */

var inquirer = require('inquirer');
// var chalkPipe = require('chalk-pipe');

var questions = [
    {
        type: 'input',
        name: 'cryptopad_url',
        message: 'Please provide your google docs url'
    }
]
inquirer.prompt(questions)
    .then(answers => {
    var str = answers.cryptopad_url
    var re = /\/d\/(.+)\//i
    var id = str.match(re)
    var google_id = id[1]
    console.log(google_id);
})




