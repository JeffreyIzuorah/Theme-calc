var totalNumber = 0;
var num1 = 0;
var num2 = 0;
var operand = null;
const screenValue = document.querySelector(`#screenValue`);
console.log("thhis is screen thingy", screenValue);



function clickNumber(number) {
    
    console.log("i am e t---",number);
    
    if (operand === null) {
        num1 = num1.toString() + number.toString();
        screenValue.innerHTML = Number (num1);
    }
        else {
           num2 = num2.toString() + number.toString(); 
           screenValue.innerHTML = Number (num2);
           console.log("this is num2", num2);
        }
}

function operation(operator) {
    screenValue.innerHTML = Number (num1) , operand;
    operand = operator;
    console.log("this is an operator",operator);
}

function equals() {
    totalNumber = operate (Number(num1), Number (num2), operand);
    screenValue.innerHTML = totalNumber;

console.log("this is equals",operate (Number(num1), Number (num2), operand));
}

function reset() {
    screenValue.innerHTML = '0';
    num1 = 0;
    num2 = 0;
    operand = null;
}

// function del() {   
//         screenValue.innerHTML = num1.slice(0, -1);
//         num1 = screenValue.innerHTML;   
// }

function del() {
    if (num2 !== 0) {
        num2 = num2.slice(0, -1);
        screenValue.innerHTML = Number (num2) || 0;
        return;
    }
    if (num1 !== 0) {
        num1 = num1.slice(0, -1);
        screenValue.innerHTML = Number (num1) || 0;
    }
}



//-------------------------------------------------------------------------------------
function operate(numb1, numb2, operator) {
    switch (operator) {
        case '+': 
          return add(numb1, numb2); 
        case '-': 
          return subtract(numb1, numb2); 
        case `*`:
          return multiply(numb1, numb2);
        case `/`:
          return divide(numb1, numb2); 
        default: 
          return numb2; 
      }
}

function add(numb1, numb2) {
    return numb1 + numb2;
}

function subtract(numb1, numb2) {
    return numb1 - numb2;
}

function multiply(numb1, numb2) {
    return numb1 * numb2;
}

function divide(numb1, numb2) {
    return numb1 / numb2;
}

//---------------------------------------------------------



function switchTheme(Number) {
    document.querySelector('body').classList;
    if (Number === 1) {
        document.querySelector('body').classList.remove("theme2", "theme3");
        document.querySelector('body').classList.add("theme1");
    } else if (Number === 2) {
        document.querySelector('body').classList.remove("theme1", "theme3");
        document.querySelector('body').classList.add("theme2");
    } else if (Number === 3) {
        document.querySelector('body').classList.remove("theme1","theme2");
        document.querySelector('body').classList.add("theme3");


}
}

  
    
    


