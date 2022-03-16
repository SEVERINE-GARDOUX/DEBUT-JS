const light = document.querySelector ('a')
const body = document.querySelector ('body')
body.style.backgroundColor = 'brown'

light.addEventListener ('click', function () {
console.log (body.style.backgroundColor) //ok ça marche
    if (body.style.backgroundColor == "brown") {
        body.style.backgroundColor = "green"
} 
    else if (body.style.backgroundColor == "green"){
    body.style.backgroundColor = "white"
}
    else if(body.style.backgroundColor == "white"){ 
    body.style.backgroundColor = "black"
}
    else if(body.style.backgroundColor == "black"){ 
    body.style.backgroundColor = "red"
}
    else if(body.style.backgroundColor == "red"){ 
    body.style.backgroundColor = "purple"
}
    else if(body.style.backgroundColor == "purple"){ 
    body.style.backgroundColor = "yellow"
}
    else if(body.style.backgroundColor == "yellow"){ 
    body.style.backgroundColor = "navy"
}
    else {
        (body.style.backgroundColor == "navy")
        body.style.backgroundColor = "#FF33CC"
    }
})