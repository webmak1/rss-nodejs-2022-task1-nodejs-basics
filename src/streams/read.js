import * as fs from 'fs';

const fileToRead = "./src/streams/files/fileToRead.txt";

export const read = async () => {
    const readStream = fs.createReadStream(fileToRead, 'utf8');

    readStream
    .on('data', function (chunk) {
      console.log(chunk);
    })
    .on('end', function () {
      console.log('FINISHED! Everythn is OK!');
    })
    .on('error', function () {
      process.stderr.write(error);
      process.exit(1);
    });
};

read();