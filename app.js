// const fs = require('fs')

// const userName='ty'

// fs.writeFile('file.txt' , 'name: ' + userName , (err)=>{
//     if(err){
//         return
//     }else{
//         console.log("file wrote")
//     }
// })

//console.log(userName)
//alert(userName)

//solely node

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log('INCOMING REQUEST')
//     console.log(req.method , req.url)
//     if(req.method === "POST"){
//         let body = ''
//         req.on('end',()=>{
//             console.log(body)
//             const userName = body.split("=")[1]
//             res.end("<h1>get the post request from " + userName + ".</h1>")
//         })
//         req.on('data' , (chunk)=>{
//             body += chunk
//         })
        
       
//     }else{
//         res.setHeader('Content-Type', 'text/html')
//         res.end('<form method="POST"><input type="text" name="username"></input><button type="submit">create</button></form>')
//     }

   
// })

// server.listen(5000)

//nodejs + express but no depencies for middleware

// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
   
//     app.use((req,res,next)=>{
//         let body=''

//         req.on('end',()=>{
//             const username= body.split('=')[1]
//             if(username){
//                 req.body = {name: username}
//                 console.log(username)
//             }
            
//             next()
//         })
//         req.on('data',(chunk)=>{

//             body+=chunk
//         })
//     })  

//     app.use((req,res,next)=>{
//         if(req.body){
//             return res.send('<h1> name: '+ req.body.name +'</h1>')
//         }
//         res.send('<form method="POST"><input type="text" name="username"></input><button type="submt">create username</button></form>')
//     })


// app.listen(5000)

//with dependencies

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
   
    app.use(bodyParser.urlencoded({extended: false}))  

    app.post('/user',(req,res,next)=>{
        res.send('<h1> name: '+ req.body.username +'</h1>')
    })
    
  

    app.get('/',(req,res,next)=>{
       
        res.send('<form action="/user" method="POST"><input type="text" name="username"></input><button type="submt">create username</button></form>')
    })


app.listen(5000)