let moment = require('moment');
let Jimp = require('jimp');
let fileHandler = require('./fileHandler');
let folderHandler = require('./folderHandler');
let phrasesArray = fileHandler.readPhrasesFile();
let arrImagesName = folderHandler.getFolderContent();
const wallpaper = require('wallpaper');
if(arrImagesName.length <= 0){
    console.log("Don't have images in folder /images. Ending the program.");
    return;
}
const intervalInSeconds = 2;
const miliseconds = intervalInSeconds*1000;
console.log('Started WindowsBackgroundChanger.');
console.log('Interval in seconds to switch the background:', intervalInSeconds, 'seconds.');
function getRandomIndexArray(randomNumber, arrLength){
    return Math.floor(randomNumber * arrLength);
}
/** Necessary to make "shadow effect" with a hack */
function writeOnImage(image, font, phrase){
    let yAxis = [1,7,4];
    var font = font;
    yAxis.forEach(function(element,index, arr) {
        var fontToWrite = font.fontBlack;
        if(element == 4){
            fontToWrite = font.fontWhite;
        }
        image.print(fontToWrite, element, 1, {
            text : phrase,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
            }, image.bitmap.width, image.bitmap.height
        );
    });
}
async function main(){
    let randomNumber = Math.random();
    let randomNumberArrPhrases = getRandomIndexArray(randomNumber, phrasesArray.phrases.length);
    let randomNumberArrImg = getRandomIndexArray(randomNumber, arrImagesName.length);
    let image = await Jimp.read('./images/' + arrImagesName[randomNumberArrImg]);
    let fontBlack = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    let fontWhite = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    writeOnImage(image, {fontBlack, fontWhite}, phrasesArray.phrases[randomNumberArrPhrases]);
    image.write('./images/imgwrite.jpeg');
    await wallpaper.set('./images/imgwrite.jpeg');
    console.log('Background image changed in', moment().format('hh:mm:ss'));
    console.log('Phrase written:', phrasesArray.phrases[randomNumberArrPhrases]);
    console.log('Next image will be changed in', intervalInSeconds, 'seconds.');
}
main();
setInterval(main,miliseconds);