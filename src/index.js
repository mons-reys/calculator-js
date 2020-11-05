import './styles/ux.css';
import Calculator from './calculator_ui/ui.js';

//creat a calculator instance
const calculator = new Calculator(document.querySelector('.container'));
calculator.init();
