const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear-btn');
const backspaceBtn = document.querySelector('.backspace-btn');
const numBtn = document.querySelectorAll('.num-btn');
const dotBtn = document.querySelector('.dot-btn')
const operatorBtn = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector('.equal-btn');

let num1 = '';
let num2 = '';
let operator = '';
let secondNumber = false;
display.textContent = '0';

clearBtn.addEventListener('click', ()=>{
  num1 = '';
  num2 = '';
  operator = '';
  secondNumber = false;
  display.textContent = '0';
})

backspaceBtn.addEventListener('click', ()=>{
  display.textContent = display.textContent.slice(0, -1) || '0';

  if(!secondNumber){
    num1 = display.textContent;
  }else{
    num2 = display.textContent;
  }
})

numBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    if(!secondNumber){
      num1 += button.value;
      display.textContent = num1;
    }else{
      num2 += button.value;
      display.textContent = num2;
    }
  })
})

dotBtn.addEventListener('click', ()=>{
  if(!display.textContent.includes('.')){
    if(!secondNumber){
      num1 += dotBtn.value;
      display.textContent = num1;
    }else{
      num2 += dotBtn.value;
      display.textContent = num2;
    }
  }
})

operatorBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    if(num2 !== ''){
      calculate();
    }
    operator = button.value;
    secondNumber = true;
  })
})
equalBtn.addEventListener('click', calculate)

function calculate(){
  let result = operate(Number(num1), operator, Number(num2));

  if(!Number.isInteger(result)){
    result = result.toFixed(2);
  }

  num1 = result;
  display.textContent = num1;
  num2 = '';
  secondNumber = false;
}

function addNum(n1, n2){
  return n1 + n2;
}

function subtractNum(n1, n2){
  return n1 - n2;
}

function multiplyNum(n1, n2){
  return n1 * n2;
}

function divideNum(n1, n2){
  return n1 / n2;
}

function operate(num1, operator, num2){
  if(operator === '+'){
   return addNum(num1, num2)
  }else if(operator === '-'){
    return subtractNum(num1, num2)
  }else if(operator === '*'){
    return multiplyNum(num1, num2)
  }else if( operator === '/'){
    if(num2 === 0){
      return display.textContent = 'ERROR';
    }
    return divideNum(num1, num2)
  }
}
