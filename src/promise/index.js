/** Una promesa tiene tres estados
 *  Pendiente [Cuando se esta ejecutando]
 *  Cumplido [Cuando regresa la informacion desada]
 *  Rechazado
 */

const promise = new Promise(function (resolve, reject) {
  resolve("hey!");
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

/**
      En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje

      La función deberá recibir dos parámetros:

      time: el tiempo de espera
      message: el mensaje que debe imprimir después del tiempo de espera
      La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.
   */

function delay(time, message) {
  // Tu código aquí 👈
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

delay(500, "Tiene que correr XD").then((response) => console.log(response));
