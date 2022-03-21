let elementNode = (name) => {
    if (name && typeof (name) === "string") {
    return document.createElement (name)
    }
    return null 
}
let textNode = (name) => {
    if (name && typeof (name)=== "string") {
    return document.createTextNode (name)
    }
    return null 
}
let ul = elementNode ('ul')

for (let index = 1; index < 11; index++) {
     let li = elementNode ('li')
     li.style.fontSize = "2.5rem"
     li.style.color = 'blue'
     let content = textNode ('Elément Javascript N°'+index)
     li.appendChild (content)
     ul.appendChild (li)
}

document.getElementById('app').appendChild(ul)
