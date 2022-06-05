import * as fs from 'fs';

const fileToWrite = "./src/streams/files/fileToWrite.txt";

export const write = async () => {
    const stdin = process.openStdin();
    const writeStream = fs.createWriteStream(fileToWrite, {flags: 'a',});

    stdin.addListener("data", function(d) {
      console.log("you entered: [" + 
          d.toString().trim() + "]");

      writeStream.write(d.toString().trim() + '\n');
      writeStream.end();
      process.exit(0);
  });
};

write();