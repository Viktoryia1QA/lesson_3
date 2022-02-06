const fse = require('fs-extra');

fse.ensureDirSync('./firstFolder');
fse.ensureDirSync('./secondFolder');

fse.ensureFileSync('./firstFolder/file.txt');

fse.moveSync('./firstFolder/file.txt', './secondFolder/file.txt');

fse.removeSync('./secondFolder/file.txt');

fse.removeSync('./firstFolder');
fse.removeSync('./secondFolder');

console.log('lesson 3 is finished');