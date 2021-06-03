// const http= require('http');
// http.createServer(function(request,response)
// {
//     response.writeHead(200,{'Content-Type':'text/plain'})
//     response.end("HelloWorld");
// }).listen(3000)
//port

const { response } = require('express');
const express= require('express');
const { request } = require('http');
const port=3000;
const app=express();
Blogmodule=require('./blog_module/blog')

app.get("/",(request,response)=>{
    response.send("Hello World");
})

app.get("/list",(request,response)=>{
    const blogdata=Blogmodule.blogList
    
    console.log(blogdata);
})
app.listen(port,()=>{
    console.log("server is running")
})