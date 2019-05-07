let a = 100;
setTimeout(() => {
  a++;
}, 0);
console.log(a);

setTimeout(() => {
  console.log(a);
}, 0);

const p = new Promise((res, re) => {
  setTimeout(() => res("yeee"), 0);
});
console.log(p);

p.then(val => {
  console.log(val);
});

setTimeout(() => {
  console.log(p);
}, 0);
