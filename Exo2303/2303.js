const h1 = document.querySelector ('h1')
const badd = document.querySelector ('.bip1')
const bwhaou = document.querySelector ('.bip2')

badd.addEventListener ('click', function (e) {
    // console.log (e.target)
    h1.innerText = e.target.dataset.mot
})

bwhaou.addEventListener ('click', function (e) {
    // console.log (e.target)
    h1.style.background = e.target.dataset.background
})

h1.addEventListener ('click', function (e) {
    // console.log (e.target)
    h1.style.background = e.target.dataset.background2
})

const playemoji= () => {
  emoji= document.querySelector('p');

   emoji.addEventListener('click', function() {

     if(emoji.textContent == '😇'){
       emoji.textContent = '🤠 '
     } else {
         emoji.textContent = '😇'
     }
   })
 }
 playemoji()