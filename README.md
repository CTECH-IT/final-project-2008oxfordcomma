
# Final Project
## Node.js Newsletter

**Dre Harm**

*Requirements*:

- Regularly send out an email
- Be able to unsubscribe from the newsletter
- Have a website that you can sign up for the newsletter
- Use the MailChimp Service in order to help send out the newsletter
- Learn how to use and implement Express.js to help process the post requests

*Changelog*

V0.1

- Added nodemon and express packages
- Began implementation of express 

V0.2

- Added webpack config file which allows webpack to run automatically
- When visiting the root of the site the user now make a POST request
- Set up submit button to create a POST request which we will be able to send to MailChimp

V0.3
- Added body parser package to make the body property readable
- Implemented body parser
- Added ID's to email and submit area in order to get them in js
- Un-hard coded the users email to return real user input

V0.4
- MailChimp API is now linked with the website
- Email Address now uploads to MailChimp
- Added Request Package
###### *Just to keep things straight*
###### User will send email to our server via a post request -> our server will relay the email to MailChimps servers -> MailChimp processes the request -> sends back a response -> Relay a message back to the user letting them know whether or not their email was successfully added to our list


