const async = require("async");

function expo(){
	return new Promise((resolve)=>{
		setTimeout(()=> {
			resolve(Math.pow(a,b));
		},2000);
	});
}

async function output(a,b){
	const ans = await expo(a,b);
	console.log(ans);
}

output(3,4);