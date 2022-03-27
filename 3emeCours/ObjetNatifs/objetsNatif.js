// objet number
const MONTHS = ['janvier', 'fevrier', 'mars', 
'avril', 'mai', 'juin', 'juillet', 'aout',
'septembre', 'octobre', 'novembre', 'decembre']

let initDate = () => {
    let date = new Date()
    let currentDate = {
    day : date.getDate(),
    month : MONTHS[date.getMonth(2)],
    year : date.getFullYear(),
    hours : date.getHours(),
    minutes : date.getMinutes(),
    secondes : date.getSeconds(),
}
return currentDate
}

//pour que les minutes s'affiche 01 et pas 1
let setData = (data) => {
    if (data <10){
        return '0'+data
    }
    return data
}

let displayDate = () => {
    let currentDate = initDate ()
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    div.className = 'currentDate'
    div2.className = 'currentTime'
    let date = `Date : ${currentDate.day} ${currentDate.month} ${currentDate.year}`
    let time = `Heure : ${setData(currentDate.hours)}:
    ${setData(currentDate.minutes)}:${setData(currentDate.secondes)}`
    let text = document.createTextNode(date)
    let text_time = document.createTextNode(time)
    div.appendChild(text);
    div2.appendChild(text_time);
    document.getElementById('app').innerHTML = " "
    document.getElementById('app').appendChild(div);
    document.getElementById('app').appendChild(div2);
}
setInterval (displayDate, 1000)