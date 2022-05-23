const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* 
 * Express only excepts dynamic HTML file so you must inject a 
 * static middleware function to use a static HTML file with express 
*/
app.use(express.static(__dirname + '/public'));

// The default packet is urlencoded so this must be included
app.use(bodyParser.urlencoded({ extended: false }))

// However to send to MailChimp you must use a json package so this is also necessary
app.use(bodyParser.json())

app.listen(3000, function() {
    console.log("Listening on: 3000");
});

 
 // Whenever the site receives a request at the root of the site
app.post('/', function(req, res) { 
    console.log(req.body.email);
    res.end('success');      
});




