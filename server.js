
//var express=require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');
var event = require('events');
var eventEmitter = new event.EventEmitter();
 
//var app=express();
//var nodemailer=require('nodemailer');
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'wearedugaonkar@gmail.com',
//     pass: 'hiiamdugaonkar'
//   }
// });
// var mailOptions = {
//   from: 'sonawanesagar3@gmail.com',
//   to: 'sagar.sonawane@kreativtech.com',
//   subject: 'Sending Email using Node.js',
//   text: 'Test!'
// };

// var mandrill = require('mandrill-api/mandrill');
// var mandrill_client = new mandrill.Mandrill('6717113f7240a5d3e2d3d3695d0c9cf3-us7');
// var nodemailer = require("nodemailer");
// var mandrillTransport = require('nodemailer-mandrill-transport');
// var smtpTransport = nodemailer.createTransport(mandrillTransport({
//     auth: {
//       apiKey :'b6d058673f3e10bda7b04965b49fb445-us7'
//     }
// }));
// let mailOptions={
//    from : 'sagar.sonawane@kreativtech.com',
//    to : 'sonawanesagar3@gmail.com',
//    subject : "This is from Node",
//    html : "Hello,<br>Sending this email using Node and Mandrill"
// };
//
// // Sending email.
// smtpTransport.sendMail(mailOptions, function(error, response){
//   if(error) {
//      throw new Error(JSON.stringify(error));
//   }
//   console.log("Message sent: " + JSON.stringify(response));
// });
//app.use(express.static(__dirname+'/public'));
// app.get('/',(req,res)=>{
//   res.send({
//     name:'sagar',
//     cities:[
//     'pune',
//     'mumbai'
//     ]
//   });
// });


http.createServer((req, res) => {
  var pathname = url.parse(req.url).hostname;

  res.writeHead(200, {
    'Content-Type': 'text/json'
  })
  res.write(pathname)
  res.write('help')
  var data1;
  //    fs.writeFile('newFile.txt','hello content',(err)=>{
  // if(err)
  // {
  //   throw err;
  // }
  try {
    if (fs.existsSync('newFile.txt')) {
      fs.appendFile('newFile2.txt', 'hello1', (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("append data successfully")
        }
      })
    } else {
      fs.open('newFile2.txt', 'w', (err, fd) => {
        if (err) {
          console.log(err);
        } else {

          console.log("new file created");
        }

      })
    }
  } catch (err) {
    console.error(err)
  }

  console.log('ertewt')
  res.end('end');
}).listen(8080)



// app.post('/about',(req,res)=>{
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error+"hi");
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// });
// app.listen(3001,()=>{
//   console.log('server 3001 is up')
// });


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var adr = 'http://localhost:3001/?year=2018&month="nov"';
//     var q=url.parse(req.url,true)
//     var data=q.query;
//     var fileName='./view'+q.pathname;
//
//     fs.readFile(fileName,(err,data)=>{
//       if(err)
//       {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//      return res.end("404 Not Found");
//       }
//       else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.writeFile('abc.txt','hellooo')
//    res.write(data);
//    return res.end();
//       }
//     })
//
//
// }).listen(3001,()=>{
//   console.log("server is up");
// });

// app.get('/',(req,res)=>{
//   var urlData=url.parse(req.url,true);
// var username=urlData.query.username
// var password=urlData.query.password
//   var body = `username=${username}&password=${password}`;
//
//
//     request.post({
//       url:`http://13.126.217.228:8585/hellodox2/login`,
//       body:body,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     },(error,response,body)=>{
//       if(error)
//       {
//         console.log(error+'dasdasd');
//       }
//       else {
//       //  res.write(response.body);
//         var sess=response.headers['set-cookie'];
//         var id=sess[0].split(';');
//   console.log(id[0]);
//   var d=JSON.parse(response.body);
//   var profileId=d.profileId
//
//         request.get({
//
//           url:`http://13.126.217.228:8585/hellodox2/rest/user/${profileId} /getUserDetails;`,
//           headers:{
//             'Cookie':id[0],
//             'Content-Type':'application/x-www-form-urlencoded'
//           }
//         },
//         (error,response,body)=>
//         {
//           if(error)
//             {
//                res.end(JSON.stringify(error));
//              }
//               else {
//             //     console.log(JSON.stringify(response));
//           //  res.writeHead(200, {'Content-Type': 'application/json'});
//                  res.send(response.body);
//                  //res.end();
//             }
//         }
//         )
//
//       }
//     });
//
// }).listen(4000)
