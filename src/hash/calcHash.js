import * as crypto from 'crypto';
import * as fs from 'fs';

const fileToRead = "./src/hash/files/fileToCalculateHashFor.txt";

export const calculateHash = async () => {
    const fileBuffer = fs.readFileSync(fileToRead);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex);
};

calculateHash();