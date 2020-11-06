class Calculator{
    constructor(container){
        this.container = container;
        this.screen = container.querySelector('.screen');
        this.buttons = container.querySelectorAll('.num');
        this.allclearButton = container.querySelector('.delete');
        this.operators = container.querySelectorAll('.operator');
        this.equal = document.querySelector('.equal');
        this.previousOperandText = document.querySelector('.previousOperand');
        this.currentOperandText = document.querySelector('.currentOperand');
        
    }

    init(){
        this.clear();
        this.buttons.forEach(button => {
            button.addEventListener('click', e =>{
                this.appendNumber(e.target.innerText);
                this.updateUi();
            })
        });
        this.operators.forEach(operator => {
            operator.addEventListener('click', e =>{
                this.chooseOperation(e.target.innerText);
                this.updateUi();
            })
        });
        this.equal.addEventListener('click', e =>{
                this.compute();
                this.updateUi();
            })
        this.allclearButton.addEventListener('click', e =>{
                this.clear();
                this.updateUi();
            })

    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }


    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString() ;
    }

    chooseOperation(operation){
        console.log(this.currentOperand);
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(curr)) return;
        switch(this.operation){
            case ('+'): 
                computation = prev + curr;
            break;
            case ('-'): 
                computation = prev - curr;
            break;
            case ('*'): 
                computation = prev * curr;
            break;
            default:
                return;
        }
        console.log(computation);
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        console.log(this.previousOperand);
    }

    updateUi(){
        this.currentOperandText.innerText = this.currentOperand;
        if(this.operation != null){
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandText.innerText = '';
        }
    }
}


export{Calculator as default};