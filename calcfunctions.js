function add(num1, num2) {
  return ( parseFloat(num1) + parseFloat(num2) ).toFixed(5).toString();
}

function subtract(num1, num2) {
  return ( parseFloat(num1) - parseFloat(num2) ).toFixed(5).toString();
}

function multiply(num1, num2) {
  return ( parseFloat(num1) * parseFloat(num2) ).toFixed(5).toString();
}

function divide(num1, num2) {
  if( num2 !== "0" ) {
    return ( parseFloat(num1) / parseFloat(num2) ).toFixed(5).toString();
  }
  else {
    return "ERROR";
  }
}
