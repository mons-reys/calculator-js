class Calculator{
    constructor(container){
        this.container = container;
        this.screen = container.querySelector('.screen');
        this.buttons = container.querySelector('.numbers');
    }

    init(){
        
        //return the key result
        this.buttons.addEventListener('click', e =>{
            //show the numbers in the screen
            this.showNumToScreen(e);
            //calculate the result 
            
        })

        

        
        
    }

    showNumToScreen(e){
        
        const key = e.target.getAttribute('data-content');
        let i = 1;
        const template = `<span numb> ${key} </span>`;
        if(key !== null && key !== 'delete' && key !== '=' ){
            this.screen.innerHTML += template; 
        }
        if(key === 'delete' ){
            this.screen.innerHTML = '';
        }
        
    }    
}

export{Calculator as default};