document.body.style.textAlign = 'center'
document.body.style.backgroundColor = 'green'


let input = document.querySelector ('.eyes')
let button = document.querySelector ('.bt')

button.addEventListener ('click', function () {
    document.querySelector ('p').innerHTML = 'Vos yeux sont ' + input.value + '👀'
    document.body.style.backgroundColor = input.value
    if (input.value == 'blue') {
        document.querySelector ('p').innerHTML = 'Vous avez les plus beaux yeux au monde !'+ input.value
    }
}
)

input.addEventListener ('keydown', function () {
    document.querySelector ('p').innerHTML = 'Vos yeux sont ' + input.value + '👁️'+'👁️'
    document.body.style.backgroundColor = input.value
    
}
)