// Es una funcion que pasa como argumento otra fuccion
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(25, 3, sum)); // Cuando se llama el calback no es necesario colocar los parentesis o colocar los argumentos ya que se estan enviando en la primera funcion.

/** ---------------------------------------------------------------------- **/

setTimeout(() => {
  console.log("Hola Javascript");
}, 5000);

/** ---------------------------------------------------------------------- **/

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Kevin");
