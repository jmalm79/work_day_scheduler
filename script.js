// set date/time
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var now = moment().format('[You landed here at ]LT');
var hEl = moment().format('HH'); 

console.log(today);

console.log(hEl);
var textAreaEl;

//     <i class="fas fa-save">   <--- use this for file save icon

timesArray = [];

 for ( i = 9; i < 18; i++){      // starts calendar entry at 9AM
    if ( i >= 13 ){    // converts from militarty to standard 

    var j = i - 12    

    } else {            // allows time after 12 to start at 1
    j = i
    }
    var timeObj = 
    
    {                   // set up to add PM at later step
    militaryTime: i,
    hour: j, 
    morning: true,
    meridiem: "",
    }
    
    if(i > 11){         // setup to add AM at later step  
        timeObj.morning = false 
    }    

    if (timeObj.morning == false){  // step to add PM
        timeObj.meridiem = "PM"
    }

    if (timeObj.morning == true){   // step to add AM 
        timeObj.meridiem = "AM"
    }
        timesArray.push(timeObj);
        
}

console.log(timesArray);

containerEl = $("#schedule");

timesArray.forEach(function(timeObj, index){
    var rowEl = $('<div>');   
    rowEl.addClass('row');  // add class of row
    var hourEl = $('<div>');  
    hourEl.addClass('hour col-1');  // add class of hour
    hourEl.text(timeObj.hour + timeObj.meridiem);

    var textAreaEl = $('<textArea>'); 
    textAreaEl.addClass('col-10 textarea');
    textAreaEl.attr("data-index", index);

    var buttonEl = $('<button>');
    buttonEl.addClass('saveBtn col-1 fas fa-save'); // adds class of saveBtn and image

    rowEl.append(hourEl);         // appends the above
    rowEl.append(textAreaEl);
    rowEl.append(buttonEl);

    containerEl.append(rowEl);
});


function setHourClass(textAreaEl, index){
    if(timesArray[index].militaryTime < hEl){
        textAreaEl.addClass('past');
    }
    else if(timesArray[index].militaryTime == hEl){
        textAreaEl.addClass('present');
    }
    if(timesArray[index].militaryTime > hEl){
        textAreaEl.addClass('future');
    }
    console.log(timesArray[index].meridiem);

}


$(".saveBtn").on("click", function(){
    textarea = $(this).siblings(".form-control").val();
    console.log(textarea);
    timesArray = $(this).siblings(".input-group-prepend").text();
    console.log(timesArray);
    localStorage.setItem(timesArray, JSON.stringify(textarea));

})