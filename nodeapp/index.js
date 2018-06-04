var express = require('express');
var logger = require('fluent-logger');
var app = express();

// The 2nd argument can be omitted. Here is a default value for options.
logger.configure('fluentd.test', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});

app.get('/', function(request, response) {
  logger.emit('follow', {from: 'userA', to: 'userB'});
  response.send('Hello World!');
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
