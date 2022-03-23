window.onload = ()=>{     // Pour mettre une date
const dateBox = document.querySelector ('.date')
const date = new Date()
const day = date.getDate()
console.log(day);
const month = date.getMonth()+1
console.log(month)
const year= date.getFullYear()
console.log(year)

dateBox.innerHtml = 'Date:<span>'+day+ '-' + month+ '-' + year + '</span>'
}

// Ls +  alerte quand on a rien rempli
const button = document.querySelector ('button')
const ul = document.querySelector ('ul')

button.addEventListener ('click', function () {
    if (champ.value == ' ') {
     alert('N oubli pas de saisir quelque chose Padawan !')
    }else {
    const li = document.creatElement ('li')
    li.innerHtml = champ.value      
    ul.appendChild(li)
}
}) 