const http =require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  let img = __dirname + "/dvertex.jpg";
  

  fs.readFile(img,(err,content)=>{
    if (err){
      res .writeHead(404, { "Content-type":"text/html"});
      res.end("<h1>No such image</h1>");

    }
    else{
      res.writeHead(200,{"Content-type": "image/jpg"});
      res.end(content);
    }
  });
});
server.listen(3000,()=>{
  console.log("Server is listening on port  3000");
});
