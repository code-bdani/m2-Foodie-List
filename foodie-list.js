"use strict";

// Sets up call to Firebase for data
let firebase = "https://nss-exercises-database.firebaseio.com/foodie";

// Sets up a new XMLHttpReuest object
var xhr = new XMLHttpRequest();

// On page load,...
xhr.onload = function() {
    // if the server status is alright...
    if (xhr.status === 200) {
        // Create a new variable called "responseObject" that parses the JSON data into a JavaScript object and stores it
        let responseObject = JSON.parse(xhr.responseText);
// Sets up a new variable called "newContent" that will eventually hold the HTML to be filled using the "for" loop below
        var newContent = "";
        for (let i = 0; i < responseObject.length; i++) {
            newContent += '<div class="col-4 border rounded text-uppercase text-light bg-dark">';
            newContent += '<h3>' + responseObject[i].restaurant + '</h3>';
            newContent += '<p class="lead text-info">My Rating: ' + responseObject[i].my_rating + '</p>';
            newContent += '</div>';
        }
// Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
        document.getElementById('content').innerHTML = newContent;
    }
};

// Prepares the request and pulls data from Firebase
xhr.open('GET', `${firebase}/restaurants.json`, true);
// Sends the request
xhr.send(null);