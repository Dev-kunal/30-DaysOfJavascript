const promiseResolve = new Promise((res, rej) => {
  setTimeout(() => res("Hi"), 2000);
});

promiseResolve.then((val) => console.log(val));

const promiseReject = new Promise((res, rej) => {
  setTimeout(() => rej("Error"), 2000);
});

promiseReject.then((val) => console.log(val)).catch((err) => console.log(err));

const chain = new Promise((res, rej) => {
  setTimeout(() => res(1), 2000);
})
  .then((res) => {
    return res * 100;
  })
  .then((res1) => res1 + 20)
  .then((res2) => res2 - 20)
  .then((finalRes) => console.log("finalres ->", finalRes));

async function getData() {
  const res = await promiseResolve;
  console.log("from function");
  console.log({ res });
}

// getData();

async function getData2() {
  try {
    console.log("from another function");
    const res = await promiseReject;
  } catch (error) {
    console.error(error);
  }
}

// getData2();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log({ data }));

async function getDataAsync() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const finalData = await res.json();
  console.log({ finalData });
}

// getDataAsync();

Promise.all(
  [1, 2, 3, 4, 5].map(async (val) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${val}`
    );
    const finalData = await res.json();
    return finalData;
  })
)
  .then((res) => res)
  .then((data) => console.log(data));

Promise.race(
  [1, 2, 3, 4, 5].map(async (val) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${val}`
    );
    const finalData = await res.json();
    return finalData;
  })
)
  .then((res) => res)
  .then((data) => console.log({ winner: data }));
