# Train-Scheduler

## Summary

A functional app that can be used to creat a schedule of train names, destination, frequency, next arrival and
how soon until the next arrival

## How To Use The App 

- Upon page load, name your train

- List the destinatin of your train

- Specify the first train time

- Input the freguency that your train runs

## Requirements

- When adding trains, administrators should be able to submit the following:

- Train Name

- Destination

- First Train Time -- in military time

- Frequency -- in minutes

- Code this app to calculate when the next train will arrive; this should be relative to the current time.

- Users from many different machines must be able to view same train times.


## Technologies Used

- Firebase

- Javascript

- CSS

- Bootstrap

- HTML


## Code Example:  This code shows an the calculations that will generate the time schedule:

var diffCalc = moment().diff(moment.unix(firstTrain), "minutes");
    
    var minAway = moment().diff(moment.unix(firstTrain), "minutes") % frequencyFormat;
    
    var minCalc = moment(frequencyFormat - minAway, "mm").format("mm");
    
    var nextTrain = moment().add(minCalc, "minutes").format("hh:mm a");

    console.log(frequencyFormat); 

### Firebase Reference link: https://console.firebase.google.com/project/train-scheduler-52f6a/database/data

### Author: Michael Peltzer


