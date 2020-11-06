class Calculator{
    constructor(container){
        this.container = container;
        this.screen = container.querySelector('.screen');
        this.buttons = container.querySelector('.numbers');
        this.template1 = document.createElement('span');
        this.template2 = document.createElement('span');
        this.operator = document.createElement('span');
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
        const operator = e.target.getAttribute('class');
        const key = e.target.getAttribute('data-content');
        let i = 1;
        

        if(key !== null && key !== 'delete' && key !== '=' ){
            this.template1.textContent += key;
            this.screen.appendChild(this.template1); 
            this.template1.classList.add('numbers1');
        }
        if(key === '+'){
            this.screen.appendChild(this.operator);
            this.operator.classList.add('operator+');
            
        }
        if(key === 'delete' ){
            this.screen.innerHTML = '';
        }
        
    }    
}

export{Calculator as default};