function inputField(inputId){
    const inputFieldId = document.getElementById(inputId);
    const inputFieldValueString = inputFieldId.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldId.value= '';
    return inputFieldValue;
}
function elementField(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValue(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}