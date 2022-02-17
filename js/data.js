const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="card" style="width: 18rem;">';
    html += `<ul class="list-group list-group-flush list">`;
    html += `<li class="list-group-item"> Nombre: ${pj.name}</li>`;
    html += `<li class="list-group-item"> E-mail: ${pj.email}</li>`;
    html += `<li class="list-group-item"> Ciudad: ${pj.address.city}</li>`;
    html += `<li class="list-group-item"> Cel: ${pj.phone}</li>`;
    html += `<li class="list-group-item"> Web-site: ${pj.website}</li>`;
    html += "</ul>";

    html += "</div>";
  });

  document.getElementById("infoPersonajes").innerHTML = html;
};

getData(API);
