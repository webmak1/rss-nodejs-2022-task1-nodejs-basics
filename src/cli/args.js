export const parseArgs = () => {
    const myArgs = process.argv.slice(2);

    for(let i = 0; i < myArgs.length; i += 2) {
        console.log(myArgs[i].substring(2) + " is " + myArgs[i+1] + ",");
    }
};

parseArgs();
