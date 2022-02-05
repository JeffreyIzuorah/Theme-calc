const maxDisplayDigits = 11;


let   displayValue = '_';
let  firstOperand = null;
let  secondOperand = null;
let  operation = null;


function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(number1, number2, operator) {
    number1 = +number1;
    number2 = +number2;
    operator = String(operator);

    switch (operator) {
        case '+': 
          return add(number1, number2); 
        case '-': 
          return subtract(number1, number2); 
        case `*`:
          return multiply(number1, number2);
        case `/`:
          return divide(number1, number2); 
        default: 
          return number2; 
      }
}

// Mouse input
function screenInputController(evt) {
    const key = evt.target;
  
    if (key.classList.contains(`decimal`)) {
      handleDecimalInput();
  
    } else if (key.classList.contains(`number`)) {
      handleNumericInput(evt.target.dataset.value);
  
    } else if (key.classList.contains(`op`)) {
      handleOperatorInput(evt.target.dataset.value);
  
    } else if (key.dataset.value === `backspace`) {
      backspace();
  
    } else if (key.dataset.value === `reset`) {
      reset(); 
    } 
  
    updateDisplay(); 
  }

  function touchStartInput(evt) {
  evt.preventDefault(); 

  screenInputController(evt); 
}



// Handles display

function handleDecimalInput() {
    if (displayValue.includes(`.`) || displayValue === `_` || secondOperand === null) {
      return; 
  
    } else if (displayValue.length < maxDisplayDigits) {
      displayValue = `${displayValue}.`;
    }
  
    secondOperand = +displayValue; 
}

function handleNumericInput() {
    if (displayValue === `0` || displayValue === `_` || secondOperand === null) {
        displayValue = `${number}`;
        
    }  else if (displayValue.length < maxDisplayDigits) {
        displayValue = `${displayValue}${number}`;
    }

    secondOperand = +displayValue;
}

function handleOperatorInput(operator) {
    if (displayValue === `_`) {
      return;
    }

    secondOperand = +displayValue; 
    firstOperand = operate(firstOperand, secondOperand, operation);
    displayValue = `${firstOperand}`; 
  
    secondOperand = null; 
    operation = operator; 


}

function backspace() {
    if (secondOperand === null) {
      operationInProgress = null; 
      return; 
  
    } else {
      displayValue = displayValue.substr(0, displayValue.length -1); 
  
      if (displayValue === ``) {
        displayValue = `_`;
        secondOperand = null; 
      } else {
        secondOperand = +displayValue;
      }
    }
}

function reset() {
    firstOperand = null;
    secondOperand = null;
    displayValue = `_`;
    operation = null;
}

function updateDisplay() {
    if (displayValue === `Infinity`) {
      display.textContent = `Inf`; 
  
    } else {
      display.textContent = insertDecimalSeparators(displayValue); 
    }
  }

// function updateDisplay() {
//     const display = document.querySelector('.screen');
//     display.value = displayValue;
// }

// updateDisplay();


// const htmlEl = document.querySelector(`html`); 
// const display = document.querySelector(`.screen p`);
// const keys = document.querySelectorAll(`.key`);
// const themeToggle = document.querySelectorAll(`.toggle-theme input`);
// const themeToggleContainer = document.querySelector(`.toggle`);


// window.addEventListener(`load`, onLoad); 
// keys.forEach(key => key.addEventListener(`click`, screenInputController));
// keys.forEach(key => key.addEventListener(`touchstart`, touchStartInput));
// document.addEventListener(`keydown`, keyboardInputController);