
//---------------------ちゃんと非同期になる書き方---------------------------
/*
$.post('/api', function(data){
	console.log(data);
});
//この書き方にするとブロックされずに処理は継続して実行される
*/
//----------------------------------------------------------------------




//------------------------------------------------
/*
var data = $.post('/api');
//↑の処理（I/O）が完了するまでブロックされる
console.log(data);
*/
//------------------------------------------------



var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(3000);