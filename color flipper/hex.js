colors = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9]

const bgcolor = document.querySelector('.color')
const btn = document.querySelector('.btn')

btn.addEventListener("click",()=>{
    let hexcolor = "#"
    for(let i =0;i<6;i++){
        hexcolor = hexcolor + colors[randomNum()]
    }

    bgcolor.textContent = hexcolor
    document.body.style.backgroundColor = hexcolor
})


function randomNum(){
    return Math.floor(Math.random()*colors.length)
}