const jimp = require('jimp');
module.exports = {
    async loadImage(imageName){
        let imageLoaded = await jimp.read('./images/paz-melhor-que-mil-palavras-v.jpeg');
        return imageLoaded;
    },
    async blur(image){
        image.blur(5);
        return image;
    },
    async resizeImage(image){
        return image.resize(800, jimp.AUTO);
    },
    async loadFont(){
        let font =  await jimp.loadFont(jimp.FONT_SANS_64_WHITE);
        return font;
    },
    async print(image, font){
        image.print(font, 10, 10, 'ddasdassdsadsdsadas');
        return image;
    },
    async edit(image){
        let loadedImage = await this.loadImage(image.fileName);
        let blurImage = await this.blur(loadedImage);
        let resizeImage = await this.resizeImage(blurImage);
        let font = await this.loadFont();
        let imagePrinted = await this.print(resizeImage, font);
        imagePrinted.write(appPaths.editedImgPath + `${image.fileName}`);
    }
}