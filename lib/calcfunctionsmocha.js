exports = module.exports = {};

exports.add = function(num1, num2) {
  return ( parseFloat(num1) + parseFloat(num2) ).toFixed(5).toString();
}

exports.subtract = function(num1, num2) {
  return ( parseFloat(num1) - parseFloat(num2) ).toFixed(5).toString();
}

exports.multiply = function(num1, num2) {
  return ( parseFloat(num1) * parseFloat(num2) ).toFixed(5).toString();
}

exports.divide = function(num1, num2) {
  return ( parseFloat(num1) / parseFloat(num2) ).toFixed(5).toString();
}


