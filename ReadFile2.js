let http= require('http');
let fs= require('fs');

let handleRequest = (request, response)=>{
response.writeHead(200,{
'Content-Type':'text/html'});

fs.readFile('./input.txt',null,function(error,data){
if(error)
{
response.writeHead(404);
response.write('file not found');
}else{
response.write(data);
}
response.end();
});
};
// port in use with process
http.createServer(handleRequest).listen(8081);