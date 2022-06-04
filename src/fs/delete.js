import * as fs from 'fs';

const fileToRemove = "./src/fs/files/fileToRemove.txt";
const errorMessage = "FS operation failed";

async function removeFile(fileToRemove) {
    await fs.unlink(fileToRemove, (err) => {
        if (err) {
            return console.error(err);
        }
    });
}

export const remove = async () => {
    try {
        if (!fs.existsSync(fileToRemove)) {
            throw new Error(errorMessage)
        } else {
            await removeFile(fileToRemove);
        }
    } catch (error){
        console.log(error);
    }
};

remove();