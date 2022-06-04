import * as fs from 'fs';

const srcPath = "./src/fs/files";
const errorMessage = "FS operation failed";

async function listDir(src) {

    await fs.readdir(src, function(err, entries) {
        if (err) {
            return console.error(err);
        }

        for (let entry of entries) {
            console.log(src + "/" + entry);
        }
    });
}

export const list = async () => {
    try {
        if (!fs.existsSync(srcPath)) {
            throw new Error(errorMessage)
        } else {
            await listDir(srcPath);
        }
    } catch (error){
        console.log(error);
    }
};

list();