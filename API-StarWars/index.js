document.body.style.backgroundColor = 'lightgrey '

let pagination = 0
async function fetchSW (url) {
   pagination ++
    const reponse = await fetch (url);
    const perso = await reponse.json (); 
    console.log (perso)  //ok je vois bien les données

    for (personnages of perso.results)
    document.querySelector ('.name').innerHTML +=  ` <p>
    <h3>${personnages.name}</h3>
    <p>Est né(e) :${personnages.birth_year}</p>
    <p> A les yeux : ${personnages.eye_color}</p>
</p>
    `
 
    if (pagination < 3) {
        fetchSW (perso.next)
    }
} 
fetchSW ('https://swapi.dev/api/people')