const fs = require("fs");
const PHRASESFILE = "./phrases.txt";
module.exports = {
    phrasesfile: PHRASESFILE,
    writePhraseFile(phrase = null){
        try{
            fs.writeFileSync(this.phrasesfile, JSON.stringify({phrases:phrase}));
            console.log("Phrase file updated.");
        } catch(err){
            console.log("Something gone wrong. Don't was possible to write content in phrase file.");
        }
    },
    readPhrasesFile(){
        try {
            let fileContent = fs.readFileSync(this.phrasesfile, "utf8");
            return JSON.parse(fileContent);
        } catch (error) {
            console.log("Something gone wrong. Don't was possible to read the content of phrase file.");
        }
    },
    /**
     * @param {string} phrase
     */
    addPhrase(phrase){
        let phrasesArray = this.readPhrasesFile();
        if(phrasesArray == undefined){
            this.writePhraseFile([phrase]);
        } else {
            phrasesArray.phrases.push(phrase);
            this.writePhraseFile(phrasesArray.phrases);
        }
    },
    /**
     * @param {string} phraseToRemove 
     */
    removePhrase(phraseToRemove){
        let phrasesArray = this.readPhrasesFile();
        let newPhrasesArray = phrasesArray.phrases.filter(function(value){
            if(value != phraseToRemove){
                return value;
            }
        });
        this.writePhraseFile(newPhrasesArray);
    },
    /**
     * @param {string} phraseToEdit 
     * @param {string} newPhrase 
     */
    editPhrase(phraseToEdit, newPhrase){
        let phrasesArray = this.readPhrasesFile();
        let newPhrasesArray = phrasesArray.phrases.map(function(frase){
            if(frase == phraseToEdit){
                frase = newPhrase;
            }
            return frase;
        });
        this.writePhraseFile(newPhrasesArray);
    }
}