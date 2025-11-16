// Get calculator elements
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator-display');
const keys = document.querySelector('.calculator-keys');

// Listen for clicks on the calculator keys
keys.addEventListener('click', function(e) {
    // Only run if a button was clicked
    if (!e.target.matches('button')) return;
    
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    
    // Remove the pressed state from all operator keys
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    
    // If key is a number
    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = 'number';
    }
    
    // If key is decimal
    if (action === 'decimal') {
        // Don't add decimal if there's already one
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.';
        } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
            display.textContent = '0.';
        }
        calculator.dataset.previousKeyType = 'decimal';
    }
    
    // If key is an operator
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;
        
        // If there's already a calculation to perform
        if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
            const result = calculate(firstValue, operator, secondValue);
            display.textContent = result;
            calculator.dataset.firstValue = result;
        } else {
            calculator.dataset.firstValue = displayedNum;
        }
        
        key.classList.add('is-depressed');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.operator = action;
    }
    
    // If key is clear
    if (action === 'clear') {
        // If it says AC, clear everything
        if (key.textContent === 'AC') {
            calculator.dataset.firstValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
            calculator.dataset.modValue = '';
            display.textContent = '0';
        } else {
            // If it says CE, just clear the display
            display.textContent = '0';
            key.textContent = 'AC';
        }
        calculator.dataset.previousKeyType = 'clear';
    }
    
    // Change AC to CE when other keys are pressed
    if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]');
        clearButton.textContent = 'CE';
    }
    
    // If key is equals
    if (action === 'calculate') {
        let firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        let secondValue = displayedNum;
        
        if (firstValue) {
            // If equals is pressed multiple times, use the stored modifier value
            if (previousKeyType === 'calculate') {
                firstValue = displayedNum;
                secondValue = calculator.dataset.modValue;
            }
            
            const result = calculate(firstValue, operator, secondValue);
            display.textContent = result;
            calculator.dataset.modValue = secondValue;
        }
        
        calculator.dataset.previousKeyType = 'calculate';
    }
});

// Calculate function
function calculate(n1, operator, n2) {
    let result = '';
    
    // Convert strings to numbers
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    
    if (operator === 'add') {
        result = firstNum + secondNum;
    }
    
    if (operator === 'subtract') {
        result = firstNum - secondNum;
    }
    
    if (operator === 'multiply') {
        result = firstNum * secondNum;
    }
    
    if (operator === 'divide') {
        result = firstNum / secondNum;
    }
    
    // Round to avoid floating point errors
    return Math.round(result * 100000000) / 100000000;
}
