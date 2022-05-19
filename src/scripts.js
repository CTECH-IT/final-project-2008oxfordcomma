var $ = require('jquery');


$('form').submit(function(event) {
    var userEmail = $('#email').val();
    
    event.preventDefault();
    console.log("Event Called.");

    $.ajax({
        url: '/',
        type: 'POST', // type of request we are making to the server
        data: { 
            email: userEmail
        },
        success: function(response) {
            console.log(response);
        }
    });
});

