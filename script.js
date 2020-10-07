
$(document).ready(function(){

    //Set the current day and time in html equal to current day and time
    var now = moment();
    $('#currentDay').text(now.format('LLLL'));

    //Array for the for loop to iterate through
    var blockArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //This for loop sets the colors and keeps local storage displayed on the page
    for(var i = 0; i < blockArr.length; i++){
        //Keep items displayed on page
        var idStr = blockArr[i].toString();
        console.log('String id: ', idStr);
        var idP = '#' + idStr;
        console.log('String idP: ', idP);
        $(idP).val(localStorage.getItem(idP));

        if(blockArr[i] < moment().hour()){
            //turn these blocks gray because they're in the past        
            $(idP).addClass('past');
        }
        else if(blockArr[i] === moment().hour()){
            //Turn this block red because this is current time
            $(idP).addClass('present')
        }
        else if(blockArr[i] > moment().hour()){
            //Turn these blocks green because this is future
            $(idP).addClass('future')
        }
    }

    //Button array used to find out what saveBtn was clicked
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
        // console.log('button clicked is: ', i);

        //Get the inputId matching the btnId
        for(var j = 0; j < buttonArr.length; j++){
            // console.log('For loop is running', j);
            // console.log('Compare buttonArr: ', buttonArr[j].btnId, 'i: ', i)
            if(buttonArr[j].btnId === i){
                var inputJ = buttonArr[j].inputId;
                //Get the text from the input box matching inputJ
                var inputJ = '#' + inputJ;
                var inputVal = $(inputJ).val();
                // console.log('Input is: ', inputVal);

                //Save the item in local storage
                localStorage.setItem(inputJ, inputVal);
                console.log(localStorage);
            }
        }
    })



})



