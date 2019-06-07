import './app/index.js';
const express = require("express");
const app = express();
const port = 3000;
app.get('/' , (request ,response)=>{
    response.sendFile('/Users/vansh/Desktop/test-website/views/index.html' , (err)=>{
        if (err)
            console.log("error here = " + err);
    });
});

app.post('/' , (request , response)=>{
    //console.log(request);
    console.log(request.query.name);
    response.send("in post root");
});

app.listen(port , (err) =>{
    if (err){
        console.log("error happened bruh");
    }else{
        console.log(`server listening to port ${port}`);
    }
});



//BASIC HTTP SERVER 
// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.end('Hello dude');
// }

// const server = http.createServer(requestHandler);

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err);
//   }

//   console.log(`server is listening on ${port}`);
// });

