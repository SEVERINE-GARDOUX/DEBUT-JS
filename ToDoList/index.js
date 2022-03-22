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

// pour submit
const formToDO = document.querySelector ('.formToDo')
formToDO.onsubmit = function (e) {

}
}
