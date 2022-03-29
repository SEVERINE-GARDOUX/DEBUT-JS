
// let reg =/^mo*del$/  ^pour début et $pour fin
// let rig = /gr[ao]s/ on pourra avoir gros ou gras

let reg = /gr[ao]s/.test("gros")
console.log (reg)

let annee = /[0-9]{4}/.test(1980) //4=le nbre de chiffre que je souhaite
console.log (annee)

//Pour verifier une date
let date_model = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/
let check_date = date_model.test("22/12/1242")
console.log (check_date)

//Pour vérifier un email 
let email = /^