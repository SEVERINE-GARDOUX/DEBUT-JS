//input
const text = document.querySelector ('.text')
const color = document.querySelector ('.color')

//button
const button = document.querySelector ('.btn')
const couleur = document.querySelector ('.Add')

//Traitements
button.addEventListener ('click', function () {
document.querySelector ('h1').textContent = 'Bienvenue ' + text.value
})

couleur.addEventListener ('click', function () {
    document.querySelector ('h2').textContent = ' Vous aimez la couleur ' + color.value 
    document.querySelector ('body').style.backgroundColor = color.value
    document.querySelector ('.btn').style.backgroundColor = color.value
    document.querySelector ('.Add').style.backgroundColor = color.value
}) 


//Pour afficher une image par rapport a une ls déroulante
const image = document.querySelector ('#serie')

image.addEventListener ('change', function (e) {
    document.querySelector ('footer').style.backgroundImage = `url(${image.value})`
}
)