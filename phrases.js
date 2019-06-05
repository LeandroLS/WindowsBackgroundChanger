"use stric";
let inquirer = require("inquirer");
let fileHandler = require("./fileHandler");
console.log("Olá, bem vindo ao WindowsBackGroundSwitcher! :D");
let questions = [
    {
        type: "list",
        name: "whatYouWant",
        message: "O que deseja fazer ?",
        choices: ["Adicionar frase", "Remover frase", "Editar frase"]
    }
];

inquirer.prompt(questions).then(answers => {
    if(answers.whatYouWant == "Adicionar frase"){
        let questions = [
            {
                type: "input",
                name: "phrase",
                message: "Qual frase ?",
            }
        ];
        inquirer.prompt(questions).then(answers => {
            fileHandler.addPhrase(answers.phrase);
        });
    } else if(answers.whatYouWant == "Remover frase"){
        let phrasesArray = fileHandler.readPhrasesFile();
        if(!phrasesArray){
            return console.log("Não há frases para remover.");
        }
        let questions = [
            {
                type: "list",
                name: "phraseToRemove",
                message: "Qual frase ?",
                choices: phrasesArray.phrases
            }
        ];
        inquirer.prompt(questions).then((answers) => {
            fileHandler.removePhrase(phrasesArray, answers.phraseToRemove);
        });
    } else if(answers.whatYouWant == "Editar frase"){
        let phrasesArray = fileHandler.readPhrasesFile();
        if(!phrasesArray){
            return console.log("Não há frases para editar.");
        }
        let questions = [
            {
                type: "list",
                name: "phraseToEdit",
                message: "Qual frase ?",
                choices: phrasesArray.phrases
            }
        ];
        inquirer.prompt(questions).then((answers) => {
            fileHandler.updatePhrase(phrasesArray, answers.phraseToEdit);
        });
    }
});

