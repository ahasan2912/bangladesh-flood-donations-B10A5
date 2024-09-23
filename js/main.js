
//common utilities function for input
function gettingInputElemnt(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

//common utilities function for innerText
function gettingInnerText(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}