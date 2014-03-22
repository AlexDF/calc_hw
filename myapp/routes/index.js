
/*
 * GET home page.
 */

var total = "0";
var additionFlag = 1;
var startOver = 0;

exports.index = function(req, res){
  res.render('index', {title: 'Express', digits: '0'});
}

exports.updateReadout = function(req, res) {
  var readoutVal = req.query.readoutVal;
  var digit = req.query.digit;
  var operation = req.query.operation;

if( operation !== "0" ) {
  if( additionFlag === 1 && operation !== "equals" ) {
    total = ( parseFloat(total) + parseFloat(readoutVal) ).toFixed(5).toString();
    additionFlag = 0;
  }
  
  if( operation === "plus" ) {
    additionFlag = 1;
  } else if( operation === "equals" ) {
    total = ( parseFloat(total) + parseFloat(readoutVal) ).toFixed(5).toString();
    res.render('index', {digits: total});
    total = "0"; 
  }
}
  
  if( operation === "equals" || operation === "0" ) {
    if( readoutVal === "0" ||  startOver === 1 ) {
      res.render('index', {digits: digit});
    } else {
      readoutVal = readoutVal + digit;
      res.render('index', {digits: readoutVal});
    }
  }

if( operation !== "0" ) {
  startOver = 1;
} else {
  startOver = 0;
}


}





