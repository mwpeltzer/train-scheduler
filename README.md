# train-scheduler

Synopsis: This web application will allow user to create a schedule for train arrivals - it allows the user to input a start time and also duration of time of for the train ride and will then use the current time to calculate a response with regards to when the next train arrives.  

Code Example:  This code shows an the calculations that will generate the time schedule:

var diffCalc = moment().diff(moment.unix(firstTrain), "minutes");
    
    var minAway = moment().diff(moment.unix(firstTrain), "minutes") % frequencyFormat;
    
    var minCalc = moment(frequencyFormat - minAway, "mm").format("mm");
    
    var nextTrain = moment().add(minCalc, "minutes").format("hh:mm a");

    console.log(frequencyFormat); 

Motivation:  To create a functional tool that can be applied to real life situations with regards to scheduling (this does not need to just be applied to trains)

Firebase Reference link: https://console.firebase.google.com/project/train-scheduler-52f6a/database/data

License: Sorry Clay, meant to ask you about this for last weeks HW - not sure what this is 
referencing

Authors: Michael Peltzer