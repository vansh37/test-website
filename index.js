// import './app/index.js';

import express, { urlencoded } from "express";
const app = express();
 app.use(urlencoded({extended: true})); ///  forms are url encoded .. to study this. DEPRECATED??  body-parser deprecated undefined extended: provide extended option 
// https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended

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

app.post('/second' , (request ,response)=>{
    //response.sendFile('/Users')
    console.log("post second");
    console.log(request);
    response.send("in post second");
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

