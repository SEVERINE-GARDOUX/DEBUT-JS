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
    exo50.textContent =='Clique ici đ'
    exo50.textContent = 'AĂŻe đ¨' 
})

//Exo51
const exo51 = document.querySelector ('.exo51')
exo51.addEventListener ('click', function () {
    if (bip.textContent == "đ"){
        bip.textContent = "âď¸"
        
   } if (bip.textContent == "âď¸"){
         bip.textContent = "đ"   
   }
})

//Exo52
const btn = document.querySelector ('.exo52')
btn.addEventListener ('click', function () {
        if (btn.textContent == "AĂŻe đ¨ Au secours !"){
            btn.textContent = "JS c'est un đş"
            return
    } 
        if (btn.textContent == "JS c'est un đş"){
            btn.textContent = "Cette formation me rend đ"
            return
    }
        if (btn.textContent == "Cette formation me rend đ"){
            btn.textContent = "Mais il fait beau đ" 
            return
                
    }   if (btn.textContent == "Mais il fait beau đ")
            btn.textContent = "AĂŻe đ¨ Au secours !"
            return
})