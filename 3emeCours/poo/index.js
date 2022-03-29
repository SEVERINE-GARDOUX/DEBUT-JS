//Creation d'un Modèle objet
function person (firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age

    this.hello = function() {
        console.log (`salut ${firstname} ${lastname}`)
    }
}
let jeanne = new person('jeanne', 'dupont', 25)
let marlene = new person('marlene', 'gata', 30)

// function Etudiant (firstname, lastname, age, level, sector){
//     this.person = person
//     this.person(firstname, lastname,age)
//     this.age = age
//     this.sector = sector

//     this.getLevel = function (){
//         console.log (`level : ${level}`)
//     }
//     this.getSector = function (){
//         console.log (`sector : ${sector}`)
//     }
// }
// let nicole = new Etudiant ('nicole', 'Dujour', 30, 'master', 'info')

//modèle avec class
class Personne {
    constructor (firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    hello () {
        console.log (`Hello ${this.firstname}`)
    }
    getAge (){
        console.log (`Hello, J'ai ${this.age} ans`)
    }
}
let camille = new Personne('camille', 'marais', 18)

class Etudiant extends Personne {  //extends pour hériter des infos de Personne
    constructor(firstname, lastname, age, level, sector) {
        super(firstname, lastname, age) //super permet de faire appel a Personne
        this.level = level
        this.sector = sector
    }
    getLevel(){
        console.log (`level : ${this.level}`)
    }
    getSector(){
        console.log (`sector : ${this.sector}`)
    }
}
let getHeritages = (obj) => {
    let prototype = Object.getPrototypeOf(obj)

    let result = []

    while (prototype) {
        result[result.length] = prototype.constructor.name
        prototype = Object.getPrototypeOf(prototype)
    }
    return result
}

let displayObject = (obj) => {
    let content = Object.entries (obj)
    document.getElementById('app').innerHTML = ''
    content.forEach(tab => {
        let result = `<div>${tab[0]} : ${tab[1]} </div>`
        document.getElementById('app').innerHTML += result
    })
}

let matthieu = new Etudiant ('matthieur', 'Boas', 24, 'bep', 'médical')