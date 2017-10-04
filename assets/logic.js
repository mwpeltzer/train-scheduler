

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBshxD5b7peyG2XAssccSpX7GIY-jKaucQ",
    authDomain: "train-scheduler-52f6a.firebaseapp.com",
    databaseURL: "https://train-scheduler-52f6a.firebaseio.com",
    projectId: "train-scheduler-52f6a",
    storageBucket: "",
    messagingSenderId: "1037083854583"
};

firebase.initializeApp(config);

var database = firebase.database();


// on click function for each div id 
$("#submit-button").on("click", function( ) {
    event.preventDefault();

    // create variables for each category of the train schedule
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var frequency = $("#frequency").val().trim();

    // variable to contain all variables above
    var newTrain = {
      name: trainName,
      dest: destination,
      first: firstTrain,
      freq: frequency 
    };
    
    // pushes newTrain info to firebase
    database.ref().push(newTrain); 
    console.log(newTrain);

    // clears the input field on 'submit' click
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequency").val("");

    var currentTime = moment().format("HH:mm");

    console.log(currentTime);









    // populates webpage with variable info
    $("#mikesTable").prepend("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrain + "</td><td>" + 
      frequency + "</td></tr>");
});



