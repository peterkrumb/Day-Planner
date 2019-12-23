// moment formatting
var jumboDate = moment().format("dddd, MMMM D YYYY");
var currentHour = (moment().format("HH"));
$("#currentDay").text(jumboDate);

var scheduleHr = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var localHr = ["0900", "1000", "1100", "1200", "100", "200", "300", "400", "500"];
var compareHr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

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
    newMeetingTD.addClass(compareHr[i]);
    newMeetingTD.attr("data-name", compareHr[i]);
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
    newMeetingTD.append(newMeetingText);
    buttonTd.append(newBtn);
}

$('.saveBtn').on("click", function(){
    event.preventDefault();
    var getId = $(this).data("name"); 
    var meeting = $("." + getId).val();
    localStorage.setItem(getId, meeting);
})

function renderMeetings() {
    for (i=0; i < scheduleHr.length; i++){
    var returnMeeting = localStorage.getItem(localHr[i]);
    $("." + localHr[i] + "").html(returnMeeting);
    }

}
renderMeetings();

$(".column").each(function(){
    var dataName = $(this).attr("data-name");
    var currentTD = "." + dataName;
    if (dataName == currentHour){
        $(currentTD).addClass("present");
    } else if(dataName < currentHour){
        $(currentTD).addClass("past");
    } else if (dataName > currentHour){
        $(currentTD).addClass("future");
    }
});

