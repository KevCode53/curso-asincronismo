import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
const data = {
  title: "Disco Solido 1TB",
  price: 570,
  description: "A description XD",
  categoryId: 3,
  images: [
    "https://trescom.com.gt/wp-content/uploads/Kingston-M.2-2280-1TB-NVMe-PCIe-SDD_2.png",
  ],
};
postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
