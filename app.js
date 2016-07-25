var express = require("express"),
    app = express(),
    moment = require('moment'),
    path = require("path");


app.get('/', function(req, res) {
    var indexFile = path.join(__dirname + '/index.html');
    res.sendFile(indexFile, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
});

app.get('/:datestring', function(req, res) {
    var d;
    res.setHeader('Content-Type', 'application/json');
    if (/^\d{8,}$/.test(req.params.datestring)) {
        d = moment(req.params.datestring, "X");
    } else {
        d = moment(req.params.datestring, "MMMM D, YYYY");
    }
    if (d.isValid()) {
        res.json({
            unix: d.format("X"),
            natural: d.format("MMMM D, YYYY")
        });
    } else {
        res.json({
            unix: null,
            natural: null
        });
    }
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");