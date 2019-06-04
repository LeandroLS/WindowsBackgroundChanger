"use stric";
const fs = require("fs");
var inquirer = require("inquirer");
console.log("Olá, bem vindo ao WindowsBackGroundSwitcher! :D");

function writePhraseFile(phrase = null){
    try{
        fs.writeFileSync("./phrases.txt", JSON.stringify({phrases:phrase}));
        console.log('Frase gravada no arquivo.');
    } catch(err){
        console.log('Algo deu errado. Não foi possível gravar o conteúdo do arquivo.');
    }
}
function readPhrasesFile(){
    try {
        let fileContent = fs.readFileSync("./phrases.txt", "utf8");
        return JSON.parse(fileContent);
    } catch (error) {
        console.log('Algo deu errado. Não foi possível ler o conteúdo do arquivo.');
    }
}

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
        addPhrase();
    } else if(answers.whatYouWant == "Remover frase"){
        removePhrase();
    }
});

async function addPhrase(){
    let questions = [
        {
            type: "input",
            name: "phrase",
            message: "Qual frase ?",
        }
    ];
    inquirer.prompt(questions).then(answers => {
        let phrasesArray = readPhrasesFile();
        if(phrasesArray == undefined){
            writePhraseFile([answers.phrase]);
        } else {
            phrasesArray.phrases.push(answers.phrase);
            writePhraseFile(phrasesArray.phrases);
        }
    });
}

function removePhrase(){
    let phrasesArray = readPhrasesFile();
    let questions = [
        {
            type: "list",
            name: "phraseToRemove",
            message: "Qual frase ?",
            choices: phrasesArray.phrases
        }
    ];
    inquirer.prompt(questions).then(answers => console.log(answers));
}