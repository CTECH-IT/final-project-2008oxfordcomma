const express = require('express');
const app = express();

/* 
 * Express only excepts dynamic HTML file so you must inject a 
 * static middleware function to use a static HTML file with express 
*/
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log("Listening on: 3000");
});

 
 // Whenever the site receives a request at the root of the site
app.post('/', function(req, res) { 
    res.end('success');      
});




