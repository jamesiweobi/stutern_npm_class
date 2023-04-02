const fs = require("fs")
const http = require("http")
const {passwordGenerator} = require("./utilities/passwordEncryption")



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  const password = passwordGenerator(200)
  console.log(password)
  res.write(password)
  res.end();
}).listen(8080);