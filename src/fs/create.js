import * as fs from 'fs';

const filePath = "./src/fs/files/fresh.txt";
const message = "I am fresh and young";
const errorMessage = "FS operation failed";

const writeFile = async () => {
    await fs.writeFile(filePath, message, function(err) {
        if(err) {
            throw new Error(errorMessage);
        }        
    }); 
};

export const create = async () => {
    try {
        if (fs.existsSync(filePath)) {
            throw new Error(errorMessage)
        } else {
            await writeFile();
        }
    } catch (error){
        console.log(error);
    }
};

create();