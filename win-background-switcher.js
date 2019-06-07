let moment = require('moment');
let Jimp = require('jimp');
let fileHandler = require('./fileHandler');
let phrasesArray = fileHandler.readPhrasesFile();
let maxArrayIndex = phrasesArray.phrases.length;
async function showMinutes(){
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
    const image = await Jimp.read('./images/paz-melhor-que-mil-palavras-v.jpeg');
    let randomNumber = Math.random();
    let randomNumberBasedOnIndex = Math.floor(randomNumber * maxArrayIndex);
    image.print(font, 50, 50, phrasesArray.phrases[randomNumberBasedOnIndex]);
    image.write('./images/eaibrow.jpeg');
    console.log(moment().format('hh:mm:ss'));
}
setInterval(showMinutes,10000);
// async function main() {
//   const font = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
//   const image = await Jimp.read('./images/paz-melhor-que-mil-palavras-v.jpeg');

//   image.print(font, 50, 50, 'Hello World!');
//   image.write('./eaibrow.jpeg');
// }

// main();

// function myFunc(arg) {
//   console.log(`arg was => ${arg}`);
// }

// setTimeout(myFunc, 1500, 'funky');