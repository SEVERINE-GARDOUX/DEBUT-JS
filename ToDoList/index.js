window.onload = ()=>{     // Pour mettre une date
const dateBox = document.querySelector ('.date')
const date = new Date()
const day = date.getDate()
console.log(day);
const month = date.getMonth()
console.log(month)
const year= date.getFullYear()
console.log(year)

dateBox.innerHtml = 'Date:<span>'+day+ '-' + month+ '-' + year + '</span>'

// Ls +  alerte quand on a rien rempli
const todo = document.querySelector ('.todo')
todo.onsubmit = function (e) {
    if (champ.value == ' ') {
     alert('N oubli pas de saisir quelque chose Padawan !')
    }else {
    input.onsubmit = () => {
    const li = document.creatElement ('li')
    li.innerHtml = champ.value      
    ul.appendChild(li)
}}
}
}