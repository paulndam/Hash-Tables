// Hash Table

// let total = 0;
// total += "hello".charCodeAt(0) - 96;

// console.log(total);

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" tp 1, "b" to 2, "c" to 3, "d" to 4
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// console.log(hash("red", 10));
// console.log(hash("red", 10));
// console.log(hash("green", 10));
// console.log(hash("yellow", 10));
// console.log(hash("brown", 10));
// console.log(hash("purple", 10));

function betterHash(key, arrayLen) {
  let total = 0;
  let primeNum = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * primeNum + value) % arrayLen;
  }
  return total;
}

console.log(betterHash("bye", 13));
console.log(betterHash("salmon", 13));
console.log(betterHash("robert", 13));
console.log(betterHash(",manchester", 13));
console.log(betterHash("crocodile", 13));
console.log(betterHash("sweet", 13));
