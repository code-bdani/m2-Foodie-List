"use strict";

/////////////// PROMISIFIES XHR REQUEST ///////////////

// Sets up call to Firebase for data
let firebase = "https://nss-exercises-database.firebaseio.com/foodie";
console.log(firebase);

let request = obj => {
    return new Promise((resolve, reject) => {
// Sets up a new XMLHttpReuest object
        let xhr = new XMLHttpRequest();
// Prepares the request and pulls data from Firebase
        xhr.open('GET', firebase, true);
// When the object loads,...
        xhr.onload = () => {
// if the status is alright...
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
// Sends the request
        xhr.send(null);
    });
};
console.log(request);

let promise = request(`${firebase}/restaurants.json`);
restaurants.then(function(restaurant){
    console.log(restaurants);
})


// // Create a new variable called "responseObject" that parses the JSON data into a JavaScript object and stores it
//         let responseObject = JSON.parse(xhr.responseText);
// // Sets up a new variable called "newContent" that will eventually hold the HTML to be filled using the "for" loop below
//         var newContent = "";
//         for (let i = 0; i < responseObject.length; i++) {
//             newContent += '<div class="col-4 border rounded text-uppercase text-light bg-dark">';
//             newContent += '<h3>' + responseObject[i].restaurant + '</h3>';
//             newContent += '<p class="lead text-info">My Rating: ' + responseObject[i].my_rating + '</p>';
//             newContent += '</div>';
//         }
// // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
//         document.getElementById('content').innerHTML = newContent;
//     }
// };


// xhr.open('GET', `${firebase}/restaurants.json`, true);