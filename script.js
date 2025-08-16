const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-btn")
const btnNum = document.querySelectorAll(".btn-num");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnEqual = document.querySelector(".btn-equal");

let output = display.textContent
let num1 = "";
let num2 = "";
let operator = "";
let secondNumber = false;

clearBtn.addEventListener("click", ()=>{
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    secondNumber = false;
})

btnNum.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(!secondNumber){
            num1 += btn.value;
            display.textContent = num1;
        }else{
            num2 += btn.value;
            display.textContent = num2;
        }
    })
})

btnOperators.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(num2 !== ""){
            calculate()
        }
        operator = btn.value;
        secondNumber = true;
    })
})

btnEqual.addEventListener("click", calculate)

function calculate(){
    let result = operate(Number(num1), operator, Number(num2))
    display.textContent = result;

    num1 = result;
    num2 = "";
    operator = "";
    secondNumber = false
}

function add(num1, num2){   
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    if(operator ===  "+"){
       return add(num1,num2);
    }else if(operator === "-"){
        return subtract(num1, num2);
    }else if(operator === "*"){
       return multiply(num1, num2)
    }else if( operator === "/"){
       return divide(num1, num2)
    }
}