

const POKEMON_API_1 = 18;
const evitarEvoluciones = 3;
let pokemonContainerCounter = 1;

let dataPokemones = [];

for(let i = 1; i <= POKEMON_API_1; i+= evitarEvoluciones) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(responseJSON => {


        $(".main-container").append($(`<div id="${responseJSON.name}-container"class="pokemon-container "><p class="name-pokemon">${responseJSON.name}</p></div>`));
        $(`#${responseJSON.name}-container`).append($(`<div class="${responseJSON.name} img-container"><img class="${responseJSON.name} img-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png"></div>`));
        $(`#${responseJSON.name}-container`).append($(`<div class="${responseJSON.name} btn-container"><button id="btn-pokemon" class="${responseJSON.name} btn-pokemon">Ver Detalle</button></div>`))
        
        dataPokemones.push(responseJSON)
        pokemonContainerCounter += 1;
    })
    .catch(error => console.error(error))
}

$(".btn-pokemon").click(mostrarDetalles);
function mostrarDetalles (event) {
    console.log(event.target)
}

