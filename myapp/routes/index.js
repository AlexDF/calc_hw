
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.show2 = function(req, res) {
  res.render('index', { digits: 2});
}

exports.show3 = function(req, res) {
  res.render('index', { digits: 3});
}
