const userInput1 = document.getElementById("userInput1")
const userInput2 = document.getElementById("userInput2")
const colorPicker = document.getElementById("color")
const cachedColorValue = localStorage.get("bg")
document.body.style.backgroundColor = cachedColorValue

function add(a, b) {
    // We want to call parseInt() on our a and b arguments, because we don't
    // know that they are numbers. 
    // see also:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    return parseInt(a) + parseInt(b)
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b)
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b)
}

function divide(a, b) {
    return parseInt(a) / parseInt(b)
}

function submitAnswer() { 
    // Check if input elements are null; return if so
    if (!userInput1 || !userInput2) return
    
    // Get the values from the input elements
    // HTMLInputElement is the TYPE of element returned from getElementById
    // Each of these has a .value property, which contains whatever the user 
    // typed in
    // see also:
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
    const value1 = userInput1.value
    const value2 = userInput2.value

    const optionAdd = document.getElementById("add")
    const optionSub = document.getElementById("subtract")
    const optionMul = document.getElementById("multiply")
    const optionDiv = document.getElementById("divide")

    let answer
    if (optionDiv.checked) {
        answer = divide(value1, value2)
    } else if (optionSub.checked) {
        answer = subtract(value1, value2)
    } else if (optionMul.checked) {
        answer = multiply(value1, value2)
    } else {
        answer = add(value1, value2)
    }

    // Get our output element
    const result = document.getElementById("result")

    // see also:
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
    result.innerText = answer
}

// Declare an event listener that, when the button element is clicked, calls the
// submitAnswer function
const submitButton = document.getElementById("answer")

// see also:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
submitButton.addEventListener("click", submitAnswer)

// On key up, we try to call submit anwwer so users don't have to press the
// button now -- an example of reactive input design
userInput1.addEventListener("change", submitAnswer)
userInput2.addEventListener("change", submitAnswer)

function colorPick() {
    // Be defensive!
    if (!colorPicker) return

    const colorValue = colorPicker.value
    document.body.style.backgroundColor = colorValue
    localStorage.set("bg", colorValue )
}

colorPicker.addEventListener("change", colorPick)

