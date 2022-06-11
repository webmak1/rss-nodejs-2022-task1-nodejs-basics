import { parentPort, workerData } from 'worker_threads';

const cupIndex = workerData;

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    console.log('CPU:' + cupIndex);
    // parentPort.postMessage(nthFibonacci(3))
    parentPort.postMessage(nthFibonacci(12))
};

sendResult();