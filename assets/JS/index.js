
var now = dayjs().hour()

// Variable to hold the hours and events and reload any tasks saved in local storage
var tasks = ["", "", "", "", "", "", "", "",]
    if (localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

// Save items in LS
localStorage.setItem("tasks", JSON.stringify(tasks))

// From LS
var mySavedTasks = JSON.parse(localStorage.getItem("tasks"));
mySavedTasks.forEach( function(element, index) {
document.getElementById(index+"textarea").value = element
})

// WHEN BUTTON IS CLICKED ITEMS ARE SAVED
$(".saveBtn").click(function(event){
    var buttonId = event.currentTarget.id
    var newTask = document.getElementById(buttonId[0] + "textarea").value
    var taskNumber = parseInt(buttonId[0]);
    tasks[taskNumber]=newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
})

//  CURRENT DAY
$('#currentDay').text("Today is: " + moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

//  EDIT BLOCK
$(".description").on("click", "p", function() {
    
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    $(this).replaceWith(textInput);
  
  
    textInput.trigger("focus");
  });

// CURRENT TIME AND AGENDA 
$(".time-block").each(function () {
    var agendaHour = $(this).attr("id");

    
    if (agendaHour < now) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    }
    
    else if (agendaHour == now) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
    }
    
    else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    }
})