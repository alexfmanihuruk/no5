const express = require('express')
const app = express()
const http = require('http')
const port = 3001

var options = {
  host: "localhost",
  port: 3000,
  path: '/',
  method: 'GET'
};


http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();
