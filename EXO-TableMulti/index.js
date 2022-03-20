// Faire une table de multiplication jusqu'a *12 avec une boucle

for (let index = 0; index <=12; index++) { 
    console.log ("3 x "+index + " = " + index*3)
}
// On peut également écrire console.log (`3 x ${index} = ${index+3}`)



let index = 0
while (index < 13) {
    console.log ("2 x "+index + " = " + index*2)
    index++
}


let index2 = 0
do {
    console.log ("4 x "+index2 + " = " + index2*4)
    index2++
} while (index2 < 13);