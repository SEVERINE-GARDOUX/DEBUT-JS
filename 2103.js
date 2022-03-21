// function getHtmlAndColor (selector, html, color, bgcolor, size) {
//     document.querySelector (selector).innerHTML = html
//     document.querySelector (selector).style.color = color
//     document.querySelector (selector).style.fontSize = size
//     document.querySelector (selector).style.backgroundColor = bgcolor
// }

// getHtmlAndColor ('h1', 'Salutation Ahmed', 'salmon' , 'green', 30 +'px')

// function getHtml  (selector, html) {
//     document.querySelector(selector).innerHTML = html
// }

// function modifHtml (selector, html, selector2, color, selector3, Bgcolor ) {
//     document.querySelector(selector).innerHtml = html
//     document.querySelector(selector2).style.color = color
//     document.querySelector(selector3).style.backgroundColor = Bgcolor  
// }
// modifHtml ('h1', 'Wesh bien ou bien', 'p', 'salmon', 'body', 'grey') 

const ul = document.querySelector ('ul')
const btn = document.querySelector ('button')
const input = document.querySelector ('input')

btn.addEventListener ('click', () => {
    const li = document.createElement ('li')
    li.innerContent = input.value
    li.addEventListener ('dbclick', () => {
        li.remove ()
    } )
})
