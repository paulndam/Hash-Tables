class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let primeNum = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNum + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hashIndex = this.hash(key);
    if (!this.keyMap[hashIndex]) {
      this.keyMap[hashIndex] = [];
    }
    this.keyMap[hashIndex].push([key, value]);
  }

  get(key) {
    let hashIndex = this.hash(key);
    if (this.keyMap[hashIndex]) {
      for (let i = 0; i < this.keyMap[hashIndex].length; i++) {
        if (this.keyMap[hashIndex][i][0] === key) {
          return this.keyMap[hashIndex][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keyArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArray.includes(this.keyMap[i][j][0])) {
            keyArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArray;
  }

  values() {
    let valArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valArray.includes(this.keyMap[i][j][1])) {
            valArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valArray;
  }
}

let hashT = new HashTable(17);

hashT.set("Rashford", "Man-U");
hashT.set("Messi", "Barca");
hashT.set("Neymar", "Paris");
hashT.set("Rodri", "Man-City");
hashT.set("Suarez", "Athletico-M");
hashT.set("Nuer", "Bayern");
hashT.set("alaba", "Bayern");

console.log(hashT);
console.log(hashT.get("Nuer"));
console.log(hashT.values());
console.log(hashT.keys());

hashT.keys().forEach(function (key) {
  console.log(hashT.get(key));
});
