const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/test', function (req, res) {
    res.send('Fail test')
});


const port = 3000;

// app.listen(port, function () {
//     console.log('Listening on port:' + port);
// });

module.exports = app;
