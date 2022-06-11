import { readFile } from 'fs/promises';
import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import * as path from 'path';
import { fileURLToPath } from 'url';
import helloFromFileC from './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();
helloFromFileC();
export let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await readFile(new URL('./files/a.json', import.meta.url)));
} else {
    unknownObject = JSON.parse(await readFile(new URL('./files/b.json', import.meta.url)));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log("unknownObject is");
console.log(unknownObject);

export const createMyServer =  createServerHttp((_, res) => {
    console.log('Request accepted');
    res.end('Request accepted');
 });

createMyServer.listen(8000,  () => {
    console.log(`Server running`);
 })
