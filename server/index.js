var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/client', function (req, res) {
  res.json(req.body);
});

const port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);