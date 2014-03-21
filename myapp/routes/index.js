
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', digits: '0' });
};

exports.updateReadout = function(req, res) {
  var readoutVal = req.query.readoutVal;
  var digit = req.query.digit;

  if( readoutVal == "0" ) {
    res.render('index', { digits: digit});
  } else {
    readoutVal = readoutVal + digit;
    res.render('index', { digits: readoutVal});
  }
}
