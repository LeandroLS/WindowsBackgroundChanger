"use stric";
const fs = require("fs");
var inquirer = require("inquirer");
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
        addFraseQuestions();
    }
});

function addFraseQuestions(){
    let questions = [
        {
            type: "input",
            name: "phrase",
            message: "Qual frase ?",
        }
    ];
    inquirer.prompt(questions).then(answers => {
        fs.readFile("./phrases.txt", { encoding:"utf-8", flag:"r"}, (err, data) => {
            /** Se não consequir ler o arquivo é porque não existe, cria um novo */
            if(err){
                fs.writeFile("./phrases.txt", "olá, sou novo", (err) => {
                    if(err) throw err;
                    console.log("arquivo salvo");
                });
            }
        });
    });
}