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
        {inputId: '9', btnId: '9AMsaveBtn'},
        {inputId: '10', btnId: '10AMsaveBtn'},
        {inputId: '11', btnId: '11AMsaveBtn'},
        {inputId: '12', btnId: '12PMsaveBtn'},
        {inputId: '13', btnId: '1PMsaveBtn'},
        {inputId: '14', btnId: '2PMsaveBtn'},
        {inputId: '15', btnId: '3PMsaveBtn'},
        {inputId: '16', btnId: '4PMsaveBtn'},
        {inputId: '17', btnId: '5PMsaveBtn'}

    ];

    //When save button is clicked do this
    $('button').click(function(){
        var i = this.id;
        console.log('button clicked is: ', i);

        //Get the inputId matching the btnId
        for(var j = 0; j < buttonArr.length; j++){
            // console.log('For loop is running', j);
            // console.log('Compare buttonArr: ', buttonArr[j].btnId, 'i: ', i)
            if(buttonArr[j].btnId === i){
                // console.log('If statement is running');
                var inputJ = buttonArr[j].inputId;
                console.log('InputId: ', inputJ);

                //Get the text from the input box matching inputJ
                var inputJ = '#' + inputJ;
                var inputVal = $(inputJ).val();
                console.log('Input is: ', inputVal);

                //(inputJ, inputval)
                localStorage.setItem(inputJ, inputVal);
                console.log(localStorage);


            }
        }
    })



})



