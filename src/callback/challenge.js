const XMLHttpRquest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

// Funcion principal que obtendra la informacion
function fetchData(urlApi, callback) {
  // Inicilizacion de un objeto HMLHttpRquest
  let xhttp = new XMLHttpRquest();

  xhttp.open("GET", urlApi, true); // Realiza la peticion de apertura de comunicacion, si es asincrono se envia true de lo contrario false
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[10].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[10]);
        console.log(
          "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
        );
        console.log(data2.title);
        console.log(
          "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
        );
        console.log(data3.name);
      }
    );
  });
});
