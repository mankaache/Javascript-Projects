const keyboard = {
    elements:{
        main:null,
        keyscontainer:null,
        keys:[]
    },

    eventHandlers:{
        oninput:null,
        onclose:null
    },
    properties:{
        value:"",
        capslock:false
    },


    init(){
        //when we load page
        this.elements.main = document.createElement('div')
        this.elements.keyscontainer = document.createElement('div')

        //adding classes
        this.elements.main.classList.add('keyboard',"keyboard--hidden")
        this.elements.keyscontainer.classList.add('keyboard__keys')
        this.elements.keyscontainer.appendChild(this._createKeys())

        this.elements.keys = this.elements.keyscontainer.querySelectorAll('.keyboard__key')

        //add to DOM
        this.elements.main.appendChild(this.elements.keyscontainer)
        document.body.appendChild(this.elements.main)

        document.querySelectorAll(".use-keyboard-input").forEach(element=>{
            element.addEventListener("focus",()=>{
                this.open(element.value, currentvalue=>{
                    element.value = currentvalue
                })
            })
        })
    },
    _createKeys(){
        //creating html for the keys
        const fragment = document.createDocumentFragment()
        const keyLayout = [
            '1','2','3','4','5','6','7','8','9','0','backspace',
            'q','w','e','r','t','y','u','i','o','p',,
            'caps','a','s','d','f','g','h','j','k','l',"enter",
            'done','z','x','c','v','b','n','m',',','.',"?","space"
        ]

        //create html for icon
        const icons = (icon_name)=>{
            return `<i class="material-icons">${icon_name}</i>`
        }

        keyLayout.forEach(key=>{
            const keyElement = document.createElement("button")
            const insertBreak = ['backspace','p','enter','?'].indexOf(key)!== -1

            //add atributes

            keyElement.setAttribute("type","button")
            keyElement.classList.add("keyboard__key")

            switch(key){
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide")
                    keyElement.innerHTML = icons('backspace')
                    keyElement.addEventListener('click',()=>{
                        this.properties.value = this.properties.value.substring(0,this.properties.value.length - 1)
                        this._triggerevents('oninput')
                    })
                    break;
                case "caps":
                    keyElement.classList.add("keyboard__key--wide","keyboard__key--activable")
                    keyElement.innerHTML = icons("keyboard_capslock")
                    keyElement.addEventListener('click',()=>{
                        this._toggleCapslock()
                        keyElement.classList.toggle('keyboard__key--active', this.properties.capslock)
                    })
                    break;
                case "enter":
                    keyElement.classList.add("keyboard__key--wide")
                    keyElement.innerHTML = icons("keyboard_return")
                    keyElement.addEventListener('click',()=>{
                        this.properties.value += "\n"
                        this._triggerevents('oninput')
                    })
                    break;
                case "space":
                    keyElement.classList.add("keyboard__key", "keyboard__key--extra--wide")
                    keyElement.innerHTML = icons("space_bar")
                    keyElement.addEventListener('click',()=>{
                        this.properties.value += " "
                        this._triggerevents('oninput')
                    })
                    break;
                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark")
                    keyElement.innerHTML = icons("check_circle")
                    keyElement.addEventListener('click',()=>{
                        this.close
                        this._triggerevents('onclose')
                    })
                    break;
                default:
                    keyElement.textContent = key.toLowerCase()
                    keyElement.addEventListener('click',()=>{
                        this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLowerCase()
                        this._triggerevents('oninput')
                    })
                    break;

            }

            fragment.appendChild(keyElement)
            if(insertBreak){
                fragment.appendChild(document.createElement('br'))
            }
        })

        return fragment
    },
    _triggerevents(handlerName){
        if(typeof this.eventHandlers[handlerName] == 'function'){
            this.eventHandlers[handlerName](this.properties.value)
        }
    },
    _toggleCapslock(){
        this.properties.capslock = !this.properties.capslock

        for(const key of this.elements.keys){
            if(key.childElementCount === 0){
                key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase()
            }
        }
    },
    open(initialValue,oninput,onclose){
        this.properties.value = initialValue || ""
        this.eventHandlers.oninput = oninput
        this.eventHandlers.onclose = onclose
        this.elements.main.classList.remove('keyboard--hidden')
    },
    close(){
        this.properties.value = ""
        this.eventHandlers.oninput = oninput
        this.eventHandlers.onclose = onclose
        this.elements.main.classList.add('keyboard--hidden')
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    keyboard.init();
   
    
})