/* GET home page. */

var startOver = 1;
var total = "0";

exports.index = function(req, res) {
  res.render('index', {digits: '0'});
}

exports.updateReadout = function(req, res) {
  var entry = req.query.digit;
  var readoutVal = req.query.readoutVal;


  if( startOver === 1 ) {
    res.render('index', {digits: entry});
    startOver = 0;
  } else {
    readoutVal += entry;
    res.render('index', {digits: readoutVal});
  }



}


