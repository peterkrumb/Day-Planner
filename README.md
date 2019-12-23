# Day-Planner

## Purpose
For this activity we will be activating a day planner with the functionality of saving events the user types in for the day with the help of local storage. I say activate because the styling has been provided to me already, I only need to append the rows and columns into the body as well as set up the local storage functions and in general work with the data of each row so that it becomes synchronous.

## Date
First I wanted to get the date to display at the top. For this I used moment.js, a tool for working with dates in JavaScript using the browser's time zone and date settings.

## Table
For the rows and columns I knew I needed to use addClass since the styling was given to me in the style.css in class format. So I set variables for the tables and rows equal to <td> and <tr> and appended them into the container as well as the meeting text area, hour box and button into the rows. I realized I had to use a compare hour array because the local storage time storage format and the date display for each hour don't actually run in synchronous order. This would become important when using if statements at the end to set up the coloring.

## Save Button
The save button was an onclick function that added whatever was typed into the meeting text into the local storage. The renderMeetings function fetched this data and kept it pinned to the column.

## Column coloring
The column.each function checked each column's data to see if the current hour, which had to be put in a variable of 9 - 17 was greater than, equal to, or less than the currentHour which was known through moment, and shaded the box accordingly.