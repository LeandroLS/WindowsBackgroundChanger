const fs = require("fs");
const IMAGE_PATH = './images';
module.exports = {
    getFolderContent(){
        return fs.readdirSync(IMAGE_PATH);
    }
}