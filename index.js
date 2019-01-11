/**
 * Sprint Bot
 * Creates PR from notes
 */


/**
 * CLI Interface
 * 
 */

const googleDriveApi = require('./googleDriveApi');
const token = require('./token.json')

 function promptGoogleFileId() {
    var inquirer = require('inquirer');
    var chalkPipe = require('chalk-pipe');

    var questions = [
        {
            type: 'input',
            name: 'cryptopad_url',
            message: 'Please provide your google docs url'
        }
    ]
    return inquirer.prompt(questions)
        .then(answers => {
        var str = answers.cryptopad_url
        var re = /\/d\/(.+)\//i
        var id = str.match(re)
        var google_id = id[1]
        console.log(google_id);
        return google_id
    })
 }

 async function main() {
    const googleFileId = await promptGoogleFileId();

    await googleDriveApi.meetingNotes(token.access_token, googleFileId);
}
main()
.then(() => console.log('I am done!'))
.catch((err) => {
    console.log('error', err)
    process.exit(1)
})
