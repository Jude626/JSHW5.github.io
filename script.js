// Create a container to hold the time slot //
var timeBlocks = $(".container");

// Create a generator for the date //
var timeDisplay = moment().format('MMMM Do YYYY');
// Use a variable to display the date //
var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

// Make an array for the times to be displayed on the left of the planner //
var timeList = ["9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

// Make a string to give an id for each time //
var idTime = ["9", "10", "11", "12","13", "14",  "15",  "16", "17"];

