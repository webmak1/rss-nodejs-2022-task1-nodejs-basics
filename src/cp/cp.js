import { fork } from 'child_process';

const scriptFile = "./src/cp/files/script.js";

let myArray = [];


const letChildToWork = () => {
  const child = fork(scriptFile, myArray);

  child.on('message', (message) => {
    console.log('Returning /total results');
  });
}

export const spawnChildProcess = async (args) => {
    process.stdin.on("data", function(d) {
        if (d.toString().trim() == 'end'){
          letChildToWork();
          // process.exit();
        } else {
          myArray.push(d.toString().trim());
          console.log(myArray);
        }
    });

    process.stdin.on('end', function() {
      console.log("END"); 
    });
};

spawnChildProcess();