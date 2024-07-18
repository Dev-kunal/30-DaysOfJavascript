const arr = new Array(1, 2, 3, 4, 5);
console.log({ arr });

console.log({ first: arr.at(0), last: arr.at(arr.length - 1) });

const pushedArray = arr.push(6);
console.log(arr);
const popArray = arr.pop(6);
console.log(arr);

const shift = arr.shift();
console.log(arr);

const unshift = arr.unshift(0, 1);
console.log(arr);

const updatedArray = arr.map((i) => i * 2);
console.log({ updatedArray });

const filteredArray = arr.filter((i) => i % 2 === 0);
console.log({ filteredArray });

const reduced = arr.reduce((acc, val) => acc + val, 0);
console.log({ reduced });

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log({ element });
}

arr.forEach((val) => console.log({ val }));

const _2dArray = [
  ["k", 1],
  ["a", 2],
  ["P", 3],
];

console.table(_2dArray);

const p_3 =
  _2dArray[_2dArray.length - 1][_2dArray[_2dArray.length - 1].length - 1];

console.log(p_3);
