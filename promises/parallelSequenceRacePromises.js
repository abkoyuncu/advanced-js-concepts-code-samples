
const promisify = (item,delay) =>
new Promise((resolve,reject)=>
  setTimeout(()=>
    resolve(item),delay));

const run = () => promisify('Messi run',2000);
const jump = () => promisify('Messi jumped',300);
const kickTheBall = () => promisify('Messi kicked the ball',200);

//Parallel sample
async function parallel() {
console.time();
const promises = [run(),jump(),kickTheBall()];
const [output1,output2,output3] = await Promise.all(promises);
console.timeEnd();
return `Parallel is done: ${output1} ${output2} ${output3}`;
}

//Race sample
async function race() {
console.time();
const promises = [run(),jump(),kickTheBall()];
const winnerAction = await Promise.race(promises);
console.timeEnd();
return `Race is done is done: ${winnerAction}`;
}

//Sequence
async function sequence() {
console.time();
const output1 = await run();
const output2 = await jump();
const output3 = await kickTheBall();
console.timeEnd();
return `Sequence is done: ${output1} ${output2} ${output3}`;
}

/*
parallel().then(console.log);
Promise {<pending>}
VM424:16 default: 2002.140869140625 ms
Parallel is done: Messi run Messi jumped Messi kicked the ball
race().then(console.log);
Promise {<pending>}
VM424:25 default: 203.97607421875 ms
Race is done is done: Messi kicked the ball
sequence().then(console.log);
Promise {<pending>}
VM424:35 default: 2501.071044921875 ms
Sequence is done: Messi run Messi jumped Messi kicked the ball
*/
