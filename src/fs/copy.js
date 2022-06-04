import * as fs from 'fs';

const srcPath = "./src/fs/files";
const destPath = "./src/fs/files_copy";
const errorMessage = "FS operation failed";

async function copyDir(src, dest) {
    await fs.mkdir(dest, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Directory created successfully!");
        console.log("\n");
    });

    await fs.readdir(src, function(err, entries) {
        if (err) {
            return console.error(err);
        }

        for (let entry of entries) {
            let srcFileCopy = src + "/" + entry;
            let destFileCopy = dest + "/" + entry;

            fs.copyFile(srcFileCopy, destFileCopy, function(err) {
                if(err) {
                    throw new Error(errorMessage);
                }        
            }); 
        }
    });
}

export const copy = async () => {
    try {
        if (fs.existsSync(destPath)) {
            throw new Error(errorMessage)
        } else {
            await copyDir(srcPath, destPath);
        }
    } catch (error){
        console.log(error);
    }
};

copy();