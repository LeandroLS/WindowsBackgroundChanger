let moment = require('moment');
let Jimp = require('jimp');
let fileHandler = require('./fileHandler');
let folderHandler = require('./folderHandler');
let phrasesArray = fileHandler.readPhrasesFile();
let arrImagesName = folderHandler.getFolderContent();
const wallpaper = require('wallpaper');
if(arrImagesName.length <= 0){
    console.log('Não há imagens na pasta /images. Encerrando o programa.');
    return;
}
const intervalInSeconds = 2;
const miliseconds = intervalInSeconds*1000;
console.log('Iniciado WindowsBackgroundSwitcher.');
console.log('Intervalo em segundos definido para troca de background:', intervalInSeconds, 'segundos.');
function getRandomIndexArray(randomNumber, arrLength){
    return Math.floor(randomNumber * arrLength);
}
async function main(){
    let randomNumber = Math.random();
    let randomNumberArrPhrases = getRandomIndexArray(randomNumber, phrasesArray.phrases.length);
    let randomNumberArrImg = getRandomIndexArray(randomNumber, arrImagesName.length);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
    const image = await Jimp.read('./images/' + arrImagesName[randomNumberArrImg]);
    image.print(font, 50, 50, phrasesArray.phrases[randomNumberArrPhrases]);
    image.write('./images/imgwrite.jpeg');
    await wallpaper.set('./images/imgwrite.jpeg');
    console.log('Imagem trocada em', moment().format('hh:mm:ss'));
    console.log('Frase escrita:', phrasesArray.phrases[randomNumberArrPhrases]);
    console.log('Proxima imagem será trocada em', intervalInSeconds, 'segundos.');
}
setInterval(main,miliseconds);