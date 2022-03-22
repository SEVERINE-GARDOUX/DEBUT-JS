let enterButton = document.getElementById ('enter')
let input = document.getElementById ('userInput')
let ul = document.querySelector ('ul')
let item = document.getElementsByTagName ('li')

function inputLength () {
    return input.value.lenght
}

function createListElement () {
    let li = document.createElement ('li')
    ul.appenChild (li)
    input.value = " "

function crossOut () {
    li.classList.toggle('done')
} 
    li.addEventListener ('click', crossOut)

    let dBtn = document.createElement('button')
    dBtn.appenChild (document.createTextNode('X'))
    li.appendChild (dBtn)
    dBtn.addEventListener ('click', deleteListItem)

function deleteListItem () {
    li.classList.add ('delete')
}
}

function addListAfterClick () {
    if (inputLenght () > 0) {
        createListElement ()
    }
}

enterButton.addEventListener ('click', addListAfterClick)