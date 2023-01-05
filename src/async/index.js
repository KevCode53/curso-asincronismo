const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 5000)
      : reject(new Error("Error"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello..!"); // Este Hello..! espera a que suceda lo de something
};

console.log("Before");
anotherFn();
console.log("After");
