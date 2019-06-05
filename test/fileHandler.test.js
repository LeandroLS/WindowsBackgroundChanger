let expect = require('chai').expect
let fileHandler = require('../fileHandler');
fileHandler.phrasesfile = './testmochaphrases.txt'
describe('fileHandler', function () {
    describe('writePhraseFile()', function () {
        it('should write/create a file', function () {
            let data = fileHandler.writePhraseFile(["teste mocha"]);
            expect(data).to.equal(undefined);
        });
    });
    describe('readPhrasesFile()', function () {
        it('should return an array of phrases', function () {
            let phrasesArray = fileHandler.readPhrasesFile();
            expect(phrasesArray).to.be.an('object').to.have.property('phrases');
            expect(phrasesArray.phrases).to.be.an('array');
        });
    });
    describe('addPhrase()', function(){
        it('should add phrase to phrasesfile', function(){
            fileHandler.addPhrase("teste addPhrase");
            let phrasesArray = fileHandler.readPhrasesFile();
            expect(phrasesArray).to.be.an('object').to.have.property('phrases');
            expect(phrasesArray.phrases).to.be.an('array');
            expect(phrasesArray.phrases).to.be.an('array').that.include("teste addPhrase");
        })
    });
    describe('removePhrase()', function(){
        it('should remove phrase in phrases file', function(){
            fileHandler.removePhrase("teste addPhrase");
            let phrasesArray = fileHandler.readPhrasesFile();
            expect(phrasesArray).to.be.an('object').to.have.property('phrases');
            expect(phrasesArray.phrases).to.be.an('array');
            expect(phrasesArray.phrases).to.be.an('array').that.not.include("teste addPhrase");
        })
    });
});