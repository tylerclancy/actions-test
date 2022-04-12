const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

const server = app.listen(process.env.PORT, function () {
  const port = server.address().port;
    console.log('Listening on port:' + port);
});

module.exports = app;
