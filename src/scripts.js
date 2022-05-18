var $ = require('jquery');

$('form').submit(function(event) {
    event.preventDefault();
    console.log("Event Called.");

    $.ajax({
        url: '/',
        type: 'POST', // type of request we are making to the server
        data: { // hard coded for now
            email: '2008oxfordcomma@gmail.com'
        },
        success: function(response) {
            console.log(response);
        }
    });
});

