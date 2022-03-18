'use script'

async function easyFetch (url) {
const response = await fetch (url)
const results = await response.json ()
let i = 0
if (results.sprites) {
document.querySelector ('body').innerHTML += `<img src="${results.sprites.back_default}" alt="">`
}if (results.results) {

for (pokemon of results.results) { 
    i++

    if (i < 6 ) {
    document.querySelector('body').innerHTML += `
<p>${pokemon.name}</p> `

    easyFetch(pokemon.url)
} } } }
easyFetch ('https://pokeapi.co/api/v2/pokemon')

