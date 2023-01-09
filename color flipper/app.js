colors = ['green','red','yellow','purple','magenta']

const btn = document.querySelector(".btn")
const bgcolor = document.querySelector(".color")



btn.addEventListener('click',()=>{
    const random = randomColor()

    bgcolor.textContent = colors[random]
    document.body.style.backgroundColor = colors[random]
})
function randomColor(){
    return Math.floor(Math.random() * colors.length)
}