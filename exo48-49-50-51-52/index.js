//Exo 48 pas fais en js

//Exo 49
const exo49 = document.querySelector ('.car')
exo49.addEventListener('click', function () {
        div.classList.toogle('.anime')
}
)

//Exo 50
const exo50 = document.querySelector ('.exo50')
exo50.addEventListener ('click', function () {
    exo50.textContent =='Clique ici 😊'
    exo50.textContent = 'Aïe 😨' 
})

//Exo51
const exo51 = document.querySelector ('.exo51')
exo51.addEventListener ('click', function () {
    if (bip.textContent == "🌈"){
        bip.textContent = "⛈️"
        
   } if (bip.textContent == "⛈️"){
         bip.textContent = "🌈"   
   }
})

//Exo52
const btn = document.querySelector ('.exo52')
btn.addEventListener ('click', function () {
        if (btn.textContent == "Aïe 😨 Au secours !"){
            btn.textContent = "JS c'est un 👺"
            return
    } 
        if (btn.textContent == "JS c'est un 👺"){
            btn.textContent = "Cette formation me rend 😖"
            return
    }
        if (btn.textContent == "Cette formation me rend 😖"){
            btn.textContent = "Mais il fait beau 😎" 
            return
                
    }   if (btn.textContent == "Mais il fait beau 😎")
            btn.textContent = "Aïe 😨 Au secours !"
            return
})