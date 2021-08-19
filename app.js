var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  var today = new Date();
  if (today.getMonth() == 8 && today.getDate() == 19) {
    res.send('Yarrr! Today is International Talk Like a Pirate Day!');
  } else {
    res.send('Nope!');
  }
});

app.listen(3000, function () {
  console.log('Pirate Day backend listening on port 3000!');
});
