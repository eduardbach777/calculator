# Calculator Project

A functional calculator built with HTML, CSS, and JavaScript. Inspired by the FreeCodeCamp calculator tutorial.

## Description

This calculator performs basic arithmetic operations (addition, subtraction, multiplication, division) and includes features like decimal input, clear functionality, and consecutive calculations.

## Features

- Basic arithmetic operations (+, -, ×, ÷)
- Decimal point support
- Clear (AC/CE) functionality
- Consecutive calculations (e.g., 5 + 3 + 2 = 10)
- Visual feedback on operator buttons
- Responsive button design

## How to Use

1. Open `index.html` in your web browser
2. Click number buttons to enter numbers
3. Click an operator button (+, -, ×, ÷)
4. Enter another number
5. Click = to see the result
6. Click CE to clear the current entry
7. Click AC to clear everything and start over

## Project Structure

```
calculator-project/
├── index.html    # Calculator structure
├── style.css     # Styling
└── script.js     # Calculator logic
```

## How It Works

### HTML Structure
- Main calculator container
- Display area for numbers
- Button grid with numbers, operators, and special keys
- Uses `data-action` attributes to identify button types

### CSS Styling
- Grid layout for button arrangement
- Different colors for different button types
- Hover and active states for better UX
- Pressed state for operator buttons

### JavaScript Logic

**Event Listener:**
Listens for all button clicks on the calculator

**Button Types:**
- Number keys (0-9)
- Operator keys (+, -, ×, ÷)
- Decimal key (.)
- Clear key (AC/CE)
- Equals key (=)

**State Management:**
Uses `calculator.dataset` to store:
- `firstValue` - First number in calculation
- `operator` - Selected operation
- `modValue` - Modifier value for repeat calculations
- `previousKeyType` - Type of last key pressed

**Calculate Function:**
Takes two numbers and an operator, returns the result

## What I Learned

- DOM manipulation with `querySelector` and `dataset`
- Event delegation pattern
- State management with data attributes
- CSS Grid for layout
- Handling edge cases (multiple decimals, consecutive operations)
- Floating point arithmetic precision
- Visual state updates (button press feedback)

## Key Challenges Solved

1. **Consecutive Calculations:** Calculator can chain operations (e.g., 5 + 3 + 2)
2. **Decimal Handling:** Prevents multiple decimal points in one number
3. **AC vs CE:** Smart clear button that changes based on context
4. **Repeat Equals:** Pressing = multiple times repeats the last operation
5. **Operator Press:** Pressing a new operator calculates the previous result first

## How the Calculator Handles Different Scenarios

### Number Input
- If display shows 0 → Replace with new number
- If previous key was operator → Start new number
- Otherwise → Append to current number

### Operator Input
- If previous operator exists → Calculate first, then set new operator
- Store the displayed number as first value
- Highlight the pressed operator

### Equals Input
- Calculate using stored first value, operator, and current display
- Store the second value for repeat calculations
- Pressing = again repeats the same operation

### Clear Input
- AC → Clears everything, resets calculator
- CE → Clears current entry only
- Changes from CE to AC after clearing

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

- Add keyboard support
- Add backspace/delete button
- Add percentage function
- Add memory functions (M+, M-, MR, MC)
- Add calculation history
- Make it responsive for mobile devices
- Add sound effects for button clicks

## Credits

Based on the calculator tutorial from FreeCodeCamp by Zell Liew
- Article: https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## License

Free to use and modify for learning purposes.
