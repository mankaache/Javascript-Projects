const value = document.querySelector('.value')
const btns = document.querySelectorAll(".btn")

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList

        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else{
            count = 0
        }

        if(count > 0){
            value.style.color = 'green'
        }else if(count < 0){
            value.style.color = 'red'
        }else{
            value.style.color = "grey"
        }

        value.textContent  = count
    })
})