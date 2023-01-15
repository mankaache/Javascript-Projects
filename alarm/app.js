const output = document.querySelector('#output');
const namer = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');

function alarm(person, delay){
    return new Promise((resolve,reject)=>{
        if (delay < 0){
            throw new Error ('alarm delay must not be negative')
        }
        setTimeout(()=>{
            resolve(`wake up ${person}`)
        }, delay)
    })
}

button.addEventListener('click', async () => {
    try {
      const message = await alarm(namer.value, delay.value);
      output.textContent = message;
    }
    catch (error) {
      output.textContent = `Couldn't set alarm: ${error}`;
    }
  });