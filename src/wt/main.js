import * as os from 'os';
import { Worker } from 'worker_threads';

const workerPath = "./src/wt/worker.js";

const cpuCount = os.cpus().length;

function runService(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })
  }
  
  async function run(i) {
    const result = await runService(i)
    // console.log(result);
  }
  
  function createRuns() {
    const promiseArray = []
    for (let i = 0; i < cpuCount; i++) {
      promiseArray.push(run(i).catch(err => console.error(err)))
    }
    return promiseArray
  }

export const performCalculations = async () => {
    Promise.all(createRuns()).then(() => console.log('END'))
    // .then(() => console.timeEnd('all'))
};


performCalculations();