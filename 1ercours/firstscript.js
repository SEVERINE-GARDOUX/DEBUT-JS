// Déclaraton de variable
let age;
// ça mettra undefined, car nous n'avons pas définie une valeur a age

age=25
//si je tape age dans console log, ça mettra 25

// Les structures conditionnelles
let ages = 25;
if(ages > 18) {         //Si (condition)
        console.log ("Vous êtes majeur")  // Si vrai = résultat a afficher
} else if(age > 5) {  // sinon si ...
    console.log ("Vous êtes Bébé")  // Resultat intermédaire
}
else { // Sinon
    console.log ("vous êtes mineur") // sinon autre résultat
}


switch (ages) {
    case 25:
        console.log ("Vous avez 25 ans")
        break
    case 18:
        console.log ("Vous avez 18 ans")
        break
    case 15 :
        console.log ("Vous avez 15 ans")
        breack

    default :
        console.log ("Désolé, aucun code promo pour els clients de votre âge !")
        break
 }