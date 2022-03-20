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

function table_multiplication ()  { //on donne des paramètres a notre fonction entre les parenthèses
    for (let index = 0; index < 13; index++) {
        console.log (`3 x ${index} = ${index+3}`)
    }
}

let carre = (nombre) => {
    if (nombre && typeof (nombre) === "number") {
        return nombre*nombre
    }else {
        return null
    }
}
// tout s'arrête au return. Rien ne sera lu après le return