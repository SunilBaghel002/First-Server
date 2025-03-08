// const http = require("http");
// const fs=require('fs')
// const port = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
  
//   res.setHeader("Content-Type", "text/html");
//   console.log(req.url)
//   if(req.url=="/"){
//     res.statusCode = 200;
//     const data=fs.readFileSync('index.html')
//     res.end(data.toString());
//   }
  
//   else if(req.url=="/about"){
//     res.statusCode = 200;
//     const data=fs.readFileSync('about.html')
//     res.end(data.toString());
//   }
//   else if(req.url=="/service"){
//     res.statusCode = 200;
//     const data=fs.readFileSync('services.html')
//     res.end(data.toString());
//   }
//   else{
//     // res.sunil() ./
//     res.statusCode=404
//     const data=fs.readFileSync('notfound.html')
//     res.end(data.toString());
//   }
// });
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})