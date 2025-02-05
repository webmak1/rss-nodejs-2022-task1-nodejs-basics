# [Assignment: Node.js basics](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md)


<br/>

```
$ cat /etc/os-release | grep 'VERSION='
VERSION="20.04.4 LTS (Focal Fossa)"
```

<br/>

```
$ node -v
v16.14.0
```


<br/>

### File system (src/fs)

<br/>

```
$ npm run fs:create
$ npm run fs:copy
$ npm run fs:rename
$ npm run fs:delete
$ npm run fs:list
$ npm run fs:read
```

<br/>

### Command line interface(src/cli)

<br/>

```
$ npm run cli:env
$ npm run cli:args
```

<br/>

### Modules(src/modules)

<br/>

```
$ npm run modules:cjsToEsm
```

<br/>

**response:**

```
Hello from c.js!
Release 5.13.0-44-generic
Version #49~20.04.1-Ubuntu SMP Wed May 18 18:44:28 UTC 2022
Path segment separator is "/"
Path to current file is /home/marley/projects/dev/rss/rss-nodejs-2022-task1-nodejs-basics/src/modules/cjsToEsm.mjs
Path to current directory is /home/marley/projects/dev/rss/rss-nodejs-2022-task1-nodejs-basics/src/modules
unknownObject is
{ a: 1, b: 2, c: 3 }
Server running
Request accepted
```

<br/>

```
$ curl localhost:8000
```

<br/>

**response:**

<br/>

```
Request accepted
```

<br/>

### Hash (src/hash)

<br/>

```
$ npm run hash:calcHash
```

### Streams (src/streams)

<br/>

```
$ npm run streams:read
$ npm run streams:write
$ npm run streams:transform
```

<br/>

### Zlib (src/zip)

<br/>

```
$ npm run zip:compress
$ npm run zip:decompress
```

<br/>

### Worker Threads (src/wt)

<br/>

```
$ npm run wt:performCalculations
```

<br/>

### Child Processes (src/cp)

<br/>

```
$ npm run cp:spawnChildProcess
```

<br/>

![Application](/img/pic1.png?raw=true)


<br/>

![Application](/img/pic2.png?raw=true)

<br/>
<hr/>
<br/>

## Description

Your task is to complete several simple tasks to learn Node.js basics

Fork [this repository](https://github.com/AlreadyBored/node-nodejs-basics)

Assignment contains several nested folders inside `src`. Your task is to implement necessary functionality inside them

## Technical requirements

- Any external tools and libraries are prohibited
- Use 16 LTS version of Node.js
- Don't change signature of pre-written functions (e.g. don't rename them, don't remove export, don't make them synchronous, etc.)
- Prefer asynchronous API whenever possible

## Subtasks

### File system (src/fs)

You should implement several functions in dedicated files

- `create.js` - implement function that creates new file `fresh.txt` with content `I am fresh and young` inside of the `files` folder (if file already exists `Error` with message `FS operation failed` must be thrown)
- `copy.js` - implement function that copies folder `files` files with all its content into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` must be thrown)
- `rename.js` - implement function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` must be thrown)
- `delete.js` - implement function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)
- `list.js` - implement function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)
- `read.js` - implement function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)

### Command line interface(src/cli)

You should implement several functions in dedicated files

- `env.js` - implement function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`
- `args.js` - implement function that parses command line arguments (given in format `--propName value --prop2Name value2`, you don't need to validate it) and prints them to the console in the format `propName is value, prop2Name is value2`

### Modules(src/modules)

You should refactor file (you can add additional imports if needed)

- `cjsToEsm.cjs` - rewrite it to it's equivalent in ECMAScript notation (and switch extension to `.mjs`)

### Hash (src/hash)

You should implement several functions in dedicated files

- `calcHash.js` - implement function that calculates SHA256 hash for file `fileToCalculateHashFor.txt` and return it as `hex`

### Streams (src/streams)

You should implement several functions in dedicated files

- `read.js` - implement function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`
- `write.js` - implement function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream
- `transform.js` - implement function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

### Zlib (src/zip)

You should implement several functions in dedicated files

- `compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API

<br/>

## Advanced Scope
### Worker Threads (src/wt)

You should implement several functions in dedicated files

- `worker.js` - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
- `main.js` - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from `10` to each `worker`. For example: on host machine with **4** cores you should create **4** workers and send **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function should return array of results. The results are an array of objects with 2 properties:
    - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
    - `data` - value from `worker` in case of success or `null` in case of error in worker  

The results in the array must be in the same order that the workers were created

### Child Processes (src/cp)

You should implement several functions in dedicated files

- `cp.js` - implement function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
    - child process `stdin` should receive input from master process `stdin`
    - child process `stdout` should send data to master process `stdout`