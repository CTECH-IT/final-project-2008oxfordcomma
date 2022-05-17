const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log("Listening on: 3000");
});

/* 
 * Whenever the site receives a request at the root of the site
*/
app.get('/', function(req, res) { 
   res.end('Testing');
});
