const fs = require("fs");

const f1 = () => console.log("... 1.");
const f2 = () => console.log("... 2.");
const f3 = () => console.log("... 3.");
const f4 = () => console.log("... 4.");
const f5 = () => console.log("... 5.");
const f6 = () => console.log("... 6.");

const read = () => {
  fs.readFile(__filename, () => {
    setTimeout(() => {
      console.log("... fs -> timeout");
    }, 0);

    setImmediate(() => {
      console.log("... fs -> immediate");
    });
  });
};

const start = () => {
  console.log("... 0 start");
  setTimeout(f1, 0);
  setImmediate(f2);
  process.nextTick(f3);
  new Promise((resolve, reject) => {
    resolve("...f4");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(f5);
  });
  process.nextTick(f6);
};
const f10 = async () => {
  console.log("... 00 f10");
  process.nextTick(f4);
//  read();
  await f1();
  setTimeout(f2, 0);
  setImmediate(f3);
  await f5();
  new Promise((resolve, reject) => {
    resolve("... f6");
  }).then((resolve) => {
    console.log(resolve);
  });
};

 start();
console.log(' fin start()==========================');
read();
console.log(' fin read()==========================');
f10();
console.log(' fin f10()==========================');
setImmediate(() => {
  console.log("... Ymmediate- ....");
});
console.log('fin Ymmediate ==========================');
console.log("fin script ==================== ");
