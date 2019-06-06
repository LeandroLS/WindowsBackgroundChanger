let Jimp = require('jimp');
async function main() {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
  const image = await Jimp.read('./images/paz-melhor-que-mil-palavras-v.jpeg');

  image.print(font, 50, 50, 'Hello World!');
  image.write('./eaibrow.jpeg');
}

main();