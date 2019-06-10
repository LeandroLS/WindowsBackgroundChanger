"use stric";
let inquirer = require("inquirer");
let fileHandler = require("./fileHandler");
console.log("Hello, wellcome to WindowsBackGroundChanger! :D");
let questions = [{
        type: "list",
        name: "whatYouWant",
        message: "What you want to do ?",
        choices: ["Add phrase", "Remove phrase", "Update phrase"]
    }];

inquirer.prompt(questions).then(answers => {
    if(answers.whatYouWant == "Add phrase"){
        let questions = [{
                type: "input",
                name: "phrase",
                message: "Wich phrase?",
            }];
        inquirer.prompt(questions).then(answers => {
            fileHandler.addPhrase(answers.phrase);
        });
    } else if(answers.whatYouWant == "Remove phrase"){
        let phrasesArray = fileHandler.readPhrasesFile();
        if(!phrasesArray){
            return console.log("Don't have phrase's to remove.");
        }
        let questions = [{
                type: "list",
                name: "phraseToRemove",
                message: "Wich phrase ?",
                choices: phrasesArray.phrases
            }];
        inquirer.prompt(questions).then((answers) => {
            fileHandler.removePhrase(answers.phraseToRemove);
        });
    } else if(answers.whatYouWant == "Update phrase"){
        let phrasesArray = fileHandler.readPhrasesFile();
        if(!phrasesArray){
            return console.log("Don't have phrases to update.");
        }
        let questions = [{
                type: "list",
                name: "phraseToEdit",
                message: "Which phrase ?",
                choices: phrasesArray.phrases
            }];
        inquirer.prompt(questions).then((phraseToEdit) => {
            let questions = [{
                    type: "input",
                    name: "newPhrase",
                    message: "Which new phrase ?",
                }];
            inquirer.prompt(questions).then((newPhrase) => {
                fileHandler.editPhrase(phraseToEdit.phraseToEdit, newPhrase.newPhrase);
            });
        });
    }
});

