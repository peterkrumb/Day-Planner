var jumboDate = moment().format("dddd, MMMM D YYYY");
var currentHour = (moment().format("HH"));
$("#currentDay").text(jumboDate);



var scheduleHr = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var localHr = ["0900", "1000", "1100", "1200", "100", "200", "300", "400", "500"];


for (i = 0; i< scheduleHr.length; i++) {
    
    var newTable = $("<table>");
    newTable.addClass("plannerTB");
    $(".container").append(newTable);
    
    var newRow = $("<tr>");
    newRow.addClass("row");
    newTable.append(newRow);

    var newHour = $("<td>");
    newHour.addClass("hour");
    newHour.html(scheduleHr[i]);

    var newMeetingTD = $("<td>");
    newMeetingTD.addClass("column");
    newMeetingTD.html("");
    var newMeetingText = $("<textarea>");
    newMeetingText.addClass("textarea " + localHr[i]);

    var buttonTd = $("<td>");
    buttonTd.addClass("buttonBox")
    var newBtn = $("<button>");
    newBtn.addClass("saveBtn");
    newBtn.attr("data-name", localHr[i]);
    newBtn.addClass("saveBtn");
    

    newRow.append(newHour, newMeetingTD, buttonTd);
}




