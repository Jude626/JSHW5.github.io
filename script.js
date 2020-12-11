// Create a container to hold the time slot //
var timeBlocks = $(".container");

// Create a generator for the date //
var timeDisplay = moment().format('MMMM Do YYYY');
// Use a variable to display the date //
var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

// Make an array for the times to be displayed on the left of the planner //
var timeList = [ "9 AM", "10 AM","11 AM","12 AM","1 PM", "2 PM", "3 PM","4 PM","5 PM"];
// Make a string to give an id for each time //
var idTime = [ "9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Create a for loop for each hour in the array //
for (var i = 0; i < timeList.length; i++) {
    var Row = $("<div class='row time-block'>").attr("id", idTime[i]);
    var Div2 = $("<div class='hour col-1'>")
    var Div = $("<textarea class='col-10'>");
    var Btn = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    timeBlocks.append(Row);

    Div2.text(timeList[i]);
    Row.append(Div2);

    Div.text();
    Row.append(Div);

    Btn.text();
    Row.append(Btn);
}

// Add event listeners for each of the save buttons for each text input line //
$("button").on("click", function(event) {
    event.preventDefault();
    var text1 = $("text")[0].value;
    var text2 = $("text")[1].value;
    var text3 = $("text")[2].value;
    var text4 = $("text")[3].value;
    var text5 = $("text")[4].value;
    var text6 = $("text")[5].value;
    var text7 = $("text")[6].value;
    var text8 = $("text")[7].value;
    var text9 = $("text")[8].value;
// Add local storage to save information even when page gets refreshed //
    localStorage.setItem("text1", text1);
    localStorage.setItem("text2", text2);
    localStorage.setItem("text3", text3);
    localStorage.setItem("text4", text4);
    localStorage.setItem("text5", text5);
    localStorage.setItem("text6", text6);
    localStorage.setItem("text7", text7);
    localStorage.setItem("text8", text8);
    localStorage.setItem("text9", text9);
});

// Add a function to check & update the time/day //
hourUpdater();
var checkTime = setInterval(hourUpdater, 15000);

function hourUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);
