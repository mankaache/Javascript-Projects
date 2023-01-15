const imageFileInput = document.getElementById('imageFileInput')
const topTextInput = document.getElementById('topTextInput')
const bottomTextInput = document.getElementById('bottomTextInput')

const canvas = document.getElementById('meme')

let image;

imageFileInput.addEventListener("change", ()=>{
    let imageDataUrl = URL.createObjectURL(imageFileInput.files[0])
    // console.log(imageDataUrl)
    image = new Image()
    image.src = imageDataUrl


    image.addEventListener('load',()=>{
        updateMemeGenerator(canvas, image,topTextInput.value,bottomTextInput.value)
    }, {once:true})
})
topTextInput.addEventListener('change',()=>{
    updateMemeGenerator(canvas,image,topTextInput.value,bottomTextInput.value)
})
bottomTextInput.addEventListener('change',()=>{
    updateMemeGenerator(canvas,image,topTextInput.value,bottomTextInput.value)
})
function updateMemeGenerator(canvas,image,topText,bottomText){
    const context = canvas.getContext('2d')
    const width = image.width
    const height = image.height
    const fontSize = Math.floor(width / 10)
    const yOffset = height/20
    //update background
    canvas.width = width
    canvas.height = height
    context.drawImage(image,0,0)


    // prepare text 
    context.strokeStyle = 'black'
    context.lineWidth = Math.floor(fontSize / 4)
    context.fillStyle = 'white'
    context.textAlign = 'center'
    context.lineJoin = 'round'
    context.font = `${fontSize}ps sans-serif`


    //add top text

    context.textBaseline = 'top'
    context.strokeText(topText, width / 2, yOffset)
    context.fillText(topText,width / 2, yOffset)
    //add bottom text

    context.textBaseline = 'bottom'
    context.strokeText(bottomText, width / 2, height-yOffset)
    context.fillText(bottomText,width / 2, height-yOffset)

}