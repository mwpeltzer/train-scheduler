
// Link Firebase (generated from the website)
var config = {
    apiKey: "AIzaSyBshxD5b7peyG2XAssccSpX7GIY-jKaucQ",
    authDomain: "train-scheduler-52f6a.firebaseapp.com",
    databaseURL: "https://train-scheduler-52f6a.firebaseio.com",
    projectId: "train-scheduler-52f6a",
    storageBucket: "",
    messagingSenderId: "1037083854583"
};

// initializes firebase
firebase.initializeApp(config);

var database = firebase.database();


// on click function for each div id 
$("#submit-button").on("click", function() {
    event.preventDefault();

    // create variables for each category of the train schedule
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = moment($("#first-train").val().trim(), "h:mm").format("X");;
    var frequency = moment($("#frequency").val().trim(), "mm").format("X");

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


  });
  
  // takes a 'snapshot' of the specific child within the newTrain variable and adds to firebase
  database.ref().on("child_added", function(childSnapshot) {


    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTrain = childSnapshot.val().first;
    var frequency = childSnapshot.val().freq;

    
    var firstTrainFormat = moment.unix(firstTrain).format("hh:mm a");
    var frequencyFormat = moment.unix(frequency).format("mm");

    // time calculations / calculates when the next train arrives based on current time
    // vs frequency of train routes 
    
    var diffCalc = moment().diff(moment.unix(firstTrain), "minutes");
    
    var minAway = moment().diff(moment.unix(firstTrain), "minutes") % frequencyFormat;
    
    var minCalc = moment(frequencyFormat - minAway, "mm").format("mm");
    
    var nextTrain = moment().add(minCalc, "minutes").format("hh:mm a");

    console.log(frequencyFormat);

    // appends user input to the table on the webpage
    $("#mikesTable")
        .append($("<tr>")
        .append($("<td>").append(trainName))
        .append($("<td>").append(destination))
        .append($("<td>").append(frequencyFormat))
        .append($("<td>").append(nextTrain))
        .append($("<td>").append(minCalc))

      );  
      console.log(trainName);  

    });


