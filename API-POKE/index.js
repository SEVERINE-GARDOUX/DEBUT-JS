document.body.style.backgroundColor = 'navy'
document.body.style.color = "white"

async function easyFetch (url) {
const response = await fetch (url)
const results = await response.json ()
let i = 0
if (results.sprites) {
document.querySelector ('body').innerHTML += `<img src="${results.sprites.back_default}" alt="">`
}if (results.results) {


for (pokemon of results.results) { 
    i++

    if (i < 11 ) {
    document.querySelector('body').innerHTML += `
    <h3>${pokemon.name}</h3> `

    easyFetch(pokemon.url)
}    
}
}
}
easyFetch ('https://pokeapi.co/api/v2/pokemon')