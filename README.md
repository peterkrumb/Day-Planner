# Day-Planner

## Purpose
For this activity we will be activating a day planner with the functionality of saving events for the day that the user types in and saving them with the help of local storage. I say activate because the styling has been provided to me already, I only need to 

## Date
First I wanted to get the date to display at the top. For this I used moment.js, a tool for working with dates in JavaScript using the browser's time zone and date settings.

## Table
For the rows and columns I knew I needed to use addClass since the styling was given to me in the style.css in class format. So I set variables for the tables and rows equal to <td> and <tr> and continued to append them into the container as well as the meeting text area, hour box and button into the rows.

## Save Button
The save button was an onclick function that added whatever was typed into the meeting text into the local storage. The renderMeetings function was was kept the meetings pinned to the column

## Column coloring
The column.each function checked each column's data to see if the current hour, which had to be put in a variable of 9 - 17 was greater than, equal to, or less than the currentHour which was known through moment, and shaded the box accordingly.