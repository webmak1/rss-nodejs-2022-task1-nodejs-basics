import { pipeline, Transform } from 'stream';

function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

export const transform = async () => {

    const input = process.stdin;
    const output = process.stdout;

    const transform = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, reverseString(chunk.toString()));
        },
      });
    
    pipeline(
        input,
        transform,
        output,
        error => {
          if (error)
            errorHandler(error, 9);
        }
    );
};

transform();