/* GET home page. */

var startOver = true;
var total = "0";
var additionFlag = true;
var minusFlag = false;
var multFlag = false;
var divideFlag = false;
var equalsFlag = false;

exports.index = function(req, res) {
  res.render('index', {digits: '0'});
}

exports.updateReadout = function(req, res) {
  var entry = req.query.d || "";
  var readoutVal = req.query.r;
  var operation = req.query.o || 0;
  
  if( operation !== 0 ) {
    equalsFlag = false;
    startOver = true;
    if( additionFlag ) {
      total = ( parseFloat(total) + parseFloat(readoutVal) ).toFixed(5).toString();
      additionFlag = false;
    }

    switch(operation) {
      case "plus":
        additionFlag = true;
        break;
      case "equals":
        equalsFlag = true;
        res.render('index', {digits: total});
        break;
      default: //operation = "clear"
        res.render('index', {digits: '0'});
        startOver = true;
        total = "0";
        additionFlag = true;
        minusFlag = false;
        multFlag = false;
        divideFlag = false;
        equalsFlag = false;
        break;  
    }//end switch
  } //end if operation !== 0
 
  if( operation === 0 ) {
    if( equalsFlag === true ) {
      total = "0";
      additionFlag = true;
      equalsFlag = false;
    }


    if( startOver ) {
      res.render('index', {digits: entry});
      startOver = false;
    } else {
      readoutVal += entry;
      res.render('index', {digits: readoutVal});
    }
  }


}


