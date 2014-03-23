/* GET home page. */

var startOver = true;
var total = "0";
var additionFlag = true, minusFlag = false, multFlag = false, divideFlag = false;

exports.index = function(req, res) {
  res.render('index', {digits: '0'});
}

exports.updateReadout = function(req, res) {
  var entry = req.query.d || "";
  var readoutVal = req.query.r;
  var operation = req.query.o || 0;
  
  if( operation !== 0 ) {
    startOver = true;
    if( additionFlag ) {
      
    }

    switch(operation) {
      case "plus"
        
    }
  }  
 
  if( operation === 0 ) {
    if( startOver ) {
      res.render('index', {digits: entry});
      startOver = true;
    } else {
      readoutVal += entry;
      res.render('index', {digits: readoutVal});
    }
  }


}


