
function inputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}
function elementField(elementId){
    const elementField = document.getElementById(elementId);
    const elementTextString = elementField.innerText;
    const elementInnerText = parseFloat(elementTextString);
    return elementInnerText;
}