var express = require('express');
var app = express();
var rendr = require('rendr');
var config = {
    'default': {
      host: '192.168.43.113',
      protocol: 'http'
    }
  }
};

var server = rendr.createServer({
  dataAdapterConfig: config
});

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});