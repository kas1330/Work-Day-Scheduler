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

    //Get the current hour of the day
    var currentHour = now.format('hA'); 
    console.log('Current Hour is: ', currentHour);

    //Get the integer value
    var currentHourInt = parseInt(currentHour);

    //convert to 24hr time if necessary
    if(currentHourInt <= 5){
        currentHourInt = currentHourInt + 12;
    }
    console.log('Int is: ', currentHourInt);

    var blockArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for(var i = 0; i < blockArr.length; i++){
        if(blockArr[i] < currentHourInt){
            //turn these blocks gray because they're in the past
            var idStr = blockArr[i].toString();
            console.log('String of int is: ', idStr);
        }
        else if(blockArr[i] === currentHourInt){
            //Turn this block  red
            var idStr = blockArr[i].toString();
            console.log('String of int is: ', idStr);
        }
        else if(blockArr[i] > currentHourInt){
            //Turn these blocks green
            var idStr = blockArr[i].toString();
            console.log('String of int is: ', idStr);
        }

    }



})



