const fs = require('fs')
var clipsFolder = './Gachi/';
var readInClips = [];
fs.readdir(clipsFolder, (err, files) => {
    files.forEach(file => {
        readInClips.push(file.split('.')[0]);
    });
    fs.writeFile('Gachi commands', readInClips.join('\n'), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
