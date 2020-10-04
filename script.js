/*
Task 1
create a function that uses (.setAttribute) to set css if time is past present of future
Task 2 
get the input from the html doc
Task 3
eventListener for the button. 
Task 4
JSON.stringify/parse get and set to localStorage
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

$(document).ready(function(){

    var now = moment();
    //LLLL is locale support
    $('#currentDay').text(now.format('LLLL'));

    var currentHour = now.format('hA'); 
    console.log('Current Hour is: ', currentHour);

    var currentHourInt = parseInt(currentHour);
    if(currentHourInt <= 5){
        currentHourInt = currentHourInt + 12;
    }
    console.log('Int is: ', currentHourInt);

    var blockArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for(var i = 0; i < blockArr.length; i++){
        if(blockArr[i] < currentHourInt){

        }
    }



})



