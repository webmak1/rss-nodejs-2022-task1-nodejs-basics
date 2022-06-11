import * as fs from 'fs';

const wrongFilename = "./src/fs/files/wrongFilename.txt";
const properFilename = "./src/fs/files/properFilename.md";
const errorMessage = "FS operation failed";

async function renameFile(wrongFilename, properFilename) {
    await fs.rename(wrongFilename, properFilename, (err) => {
        if (err) {
            return console.error(err);
        }
    });
}

export const rename = async () => {
    try {
        if (!fs.existsSync(wrongFilename)) {
            throw new Error(errorMessage);
        } else if (fs.existsSync(properFilename)) {
            throw new Error(errorMessage);
        } else {
            await renameFile(wrongFilename, properFilename);
        }
    } catch (error){
        console.log(error);
    }
};

rename();