// les fonctions

let saw_thanks = () => {
    console.log ('Bienvenue dans notre fonction')
}
saw_thanks()

let table_multiplication = () => {
    for (let index = 0; index < 13; index++) {
        console.log (`3 x ${index} = ${index+3}`)
    }
}

function table_multiplication ()  { //on donne des paramètres a note fonction entre les parenthèses
    for (let index = 0; index < 13; index++) {
        console.log (`3 x ${index} = ${index+3}`)
    }
}

