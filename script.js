// Create a container to hold the time slot //
var timeBlocks = $(".container");

// Create a generator for the date //
var timeDisplay = moment().format('MMMM Do YYYY');
// Use a variable to display the date //
var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

// Make an array for the times to be displayed on the left of the planner //

// Make a string to give an id for each time //
