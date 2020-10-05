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


    //This for loop sets the colors
    for(var i = 0; i < blockArr.length; i++){
        if(blockArr[i] < moment().hour()){
            //turn these blocks gray because they're in the past
            var idStr = blockArr[i].toString();
            console.log('String of int is: ', idStr);
            var idStr = '#' + idStr;
            console.log('String of int is: ', idStr);
            $(idStr).addClass('past');

        }
        else if(blockArr[i] === moment().hour()){
            //Turn this block  red
            var idStr = blockArr[i].toString();
            console.log('String of int is: ', idStr);
            var idStr = '#' + idStr;
            console.log('String of int is: ', idStr);
            $(idStr).addClass('present')


        }
        else if(blockArr[i] > moment().hour()){
            //Turn these blocks green
            var idStr = blockArr[i].toString();
            console.log('String of int is: ', idStr);
            var idStr = '#' + idStr;
            console.log('String of int is: ', idStr);
            $(idStr).addClass('future')

        }

    }

    var buttonArr = [
        {inputId: '9', btnId: '9AMSaveBtn'},
        {inputId: '10', btnId: '10AMSaveBtn'},
        {inputId: '11', btnId: '11AMSaveBtn'},
        {inputId: '12', btnId: '12PMSaveBtn'},
        {inputId: '13', btnId: '1PMSaveBtn'},
        {inputId: '14', btnId: '2PMSaveBtn'},
        {inputId: '15', btnId: '3PMSaveBtn'},
        {inputId: '16', btnId: '4PMSaveBtn'},
        {inputId: '17', btnId: '5PMSaveBtn'},

    ]

    //When save button is clicked do this
    $('button').click(function(){
        var i = this.id;
        console.log('button clicked is: ', i);


    })



})



