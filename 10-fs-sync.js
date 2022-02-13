//There are two types 1) Synchronously Blocking 2) Synchronusly Non Blocking

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second);

//if file is not there it will create the file, and each call will overwrite the file
//writeFileSync('./content/result.txt', `This is the result: ${first} ${second}`)

//To append the file
writeFileSync('./content/result-sync.txt', `This is the result: ${first} ${second}`, {flag: 'a'})