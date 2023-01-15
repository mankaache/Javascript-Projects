const clickArea = document.querySelector('.click-area')
const displayText = document.querySelector('.display-text')
const scores = document.querySelectorAll('.score')

const scoreHistory = []

const MIN_secondsToChange = 3000
const MAX_secondsToChange = 7000

let msSinceEpochOnTimeout = 0
let waitingForClick = false


function play(){
    const msTillChange = Math.floor(Math.random() * (MAX_secondsToChange - MIN_secondsToChange)) + MIN_secondsToChange

    clickArea.style.backgroundColor = null

    displayText.textContent = ""


    setTimeout(()=>{
        msSinceEpochOnTimeout = Date.now() // gives ms since 1997
        //reaction time Date.now() - msSinceEpochOnTimeout
        clickArea.style.backgroundColor = "#009578"
        waitingForClick = true
    }, msTillChange)
}
function addScore(score){
    scoreHistory.unshift(score)

    for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
        const score = scoreHistory[i];
        
        scores[i].textContent = `${score} ms`
    }
}
clickArea.addEventListener('click',()=>{
    if(waitingForClick){
        const score = Date.now() - msSinceEpochOnTimeout

        waitingForClick = false;
        displayText.textContent = `your time was ${score} ms! click ato play again`

        addScore(score)
    }else{
        play()
    }
})