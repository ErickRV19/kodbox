const url = "https://free-nba.p.rapidapi.com/teams?page=01";
let equipo = document.getElementById("equipo");
let abreviatura = document.getElementById("abreviatura");
let conferencia = document.getElementById("conferencia");
let division = document.getElementById("division");
let ciudad = document.getElementById("ciudad");
let botonPosterior = document.getElementById("posterior");
let botonAnterior = document.getElementById("anterior");
let num = 0;

botonPosterior.onclick = function siguiente() {
    num++;
    generar();
    console.log("click");
};
botonAnterior.onclick = function siguiente() {
    num--;
    console.log("click");
    generar();
};

function generar() {
    fetch(url, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "tu clave",
            },
        })
        .then((response) =>
            response.json().then((datos) => {
                console.log(datos.data[num]);
                equipo.innerHTML = datos.data[num].full_name;
                abreviatura.innerHTML = datos.data[num].abbreviation;
                conferencia.innerHTML = datos.data[num].conference;
                division.innerHTML = datos.data[num].division;
                ciudad.innerHTML = datos.data[num].city;
            })
        )

    .catch((err) => {
        console.log(err);
    });
}