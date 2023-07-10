const async = require("async");

function mod(a,b){
	return new Promise((resolve)=>{
		setTimeout(()=> {
			resolve(a%b);
		},2000);
	});
}

async function output(a,b){
	const ans = await mod(a,b);
	console.log(ans);
}

var i = prompt();
var j= prompt();
output(i,j);