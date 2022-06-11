import { createReadStream, createWriteStream } from 'fs';
import * as zlib from 'zlib';

const resultFile = "./src/zip/files/fileToCompress.txt";
const archive = "./src/zip/files/archive.gz";

export const decompress = async () => {
    const handleStream = createReadStream(archive);
    handleStream
    .pipe(zlib.createUnzip())
    .pipe(createWriteStream(resultFile))
    .on('finish', () => {
      console.log(`Decompression process done: ${resultFile}`)
    })
};

decompress();