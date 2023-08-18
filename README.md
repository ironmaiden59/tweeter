# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This app provides the user with the ability to post tweets to a Tweet feed. This app was built with Javascript, jQuery, AJAX on the front-end, and with Express and Node on the back-end. The contents of the app were built using HTML and CSS styling. 

# Final Product

## Core Features
- Start by writing a tweet in the tweet box and clicking on "Tweet". This will "Submit" the tweet to the back-end via AJAX.
- A successful POST request will then GET the tweet object back from the back-end and update the feed without having to refresh the page. 
- Error messages will be displayed if an empty tweet or a tweet longer than 140 characters is being submitted. 
- This app uses responsive design and will adjust depending on the display size. 

## Screenshots

**Main Tweeter Page**

https://github.com/ironmaiden59/tweeter/blob/master/docs/Desktop%20view.png?raw=true

**Main Tweeter Page with an Error Message when Submitting an Empty Tweet**

https://github.com/ironmaiden59/tweeter/blob/master/docs/Error%20Message.png?raw=true

**Less than 1024px**

https://github.com/ironmaiden59/tweeter/blob/master/docs/Less%20than%201024pxpng.png?raw=true

## Getting Started
1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies
- Express
- Node 5.10.x or above
- nodemon
- chance
- md5
