let input = document.getElementById('input')
let Add = document.getElementById ('Add')
let h1 = document.querySelector('h1')

Add.addEventListener ('click', (e) => {
h1.textContent='Salutation ' + input.value
}
)

 input.addEventListener ('change', (e) => {
 h1.textContent= 'Wesh, bien ou bien  ' + input.value
}
)