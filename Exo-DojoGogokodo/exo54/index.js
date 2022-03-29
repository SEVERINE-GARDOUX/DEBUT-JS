let count = 0
let limit = 19

setInterval (function () {
    if (count <= 9) {
        count++
    } else if (count > 9) {
        return
    }
const para = document.createElement('div')
para.classList.add('carNoir')
document.querySelector('.carré').appendChild(para)
}, 1000)

function myGreeting () {
    setInterval(function () {
        if (count <= limit) {
            count++
        }else if (count > limit) {
            return
        }
        const paraRouge = document.createElement('div')
        paraRouge.classList.add('carRouge')
        document.querySelector('.carré2').appendChild(paraRouge)
    }, 1000)
}
const myTimeout = setTimeout(myGreeting, 1000)