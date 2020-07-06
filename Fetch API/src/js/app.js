const url = "https://swapi.dev/api/people/";
let personaje = document.getElementById("nombre");
let altura = document.getElementById("altura");
let color_cabello = document.getElementById("color_cabello");
let color_ojo = document.getElementById("color_ojo");
let botonPosterior = document.getElementById("posterior");
let botonAnterior = document.getElementById("anterior");
let num = 0;

botonPosterior.onclick = function siguiente() {
    num++;
    generar();
};
botonAnterior.onclick = function siguiente() {
    num--;
    generar();
};

function generar() {
    fetch(url + num, {
            method: "GET",
        })
        .then((response) =>
            response.json().then((data) => {
                personaje.innerHTML = data.name;
                altura.innerHTML = data.height;
                color_cabello.innerHTML = data.hair_color;
                color_ojo.innerHTML = data.eye_color;
            })
        )
        .catch((err) => {
            console.log(err);
        });
}