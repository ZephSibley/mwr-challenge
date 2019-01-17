
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const helmet = require('helmet');

const port = process.env.PORT || 8080;
const app = express();

app.use(helmet({ // Basic security features - see README
    dnsPrefetchControl:{
        allow: false
    },
    frameguard: {
        action: "deny"
    },
})); 

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', function (req, res) {
    return res.send('Confirmed');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);