
/*
 * GET home page.
 */


exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


exports.fire=require('./fire.js').fire;
exports.player1=require('./player1.js').player1;
exports.player2=require('./player2.js').player2;




