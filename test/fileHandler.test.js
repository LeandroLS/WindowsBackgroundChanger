let expect = require('chai').expect
let fileHandler = require('../fileHandler');
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
});