import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const fileToCompress = "./src/zip/files/fileToCompress.txt";
const archive = "./src/zip/files/archive.gz";

export const compress = async () => {
    const handleStream = createReadStream(fileToCompress);
    handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(archive))
    .on('finish', () => {
      console.log(`Compression process done: ${fileToCompress}`)
    })
};


compress();