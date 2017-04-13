$(document).ready(function(){
  //variable for buzzer audio clip
  var buzzer = $("#buzzer")[0];
  //variable for session time number
  var sessionCount = parseInt($("#sessionNum").html());
  var breakCount = parseInt($("#breakNum").html());
  //hide reset button when page loads
  $("#reset").hide();
  
  //target minus5Clock button on click
  $("#minus5Clock").click(function(){
    //if count is greater than one
    if (sessionCount>1) {
      //subract one from count
      sessionCount -= 1;
      //target sessionNum to output count
    $("#sessionNum").html(sessionCount);
    }    
  });
  
  //target add5Clock button on click
  $("#add5Clock").click(function(){
    //add 1 to count
    sessionCount += 1;
    //target sessionNum to output count
    $("#sessionNum").html(sessionCount);    
  });  
  
  
    //Same but for break time
  $("#minus5Break").click(function(){
    if (breakCount>1) {
      breakCount -= 1;
    $("#breakNum").html(breakCount);
    }    
  });
  
 $("#add5Break").click(function(){
    breakCount += 1;
    $("#breakNum").html(breakCount);    
  });
  
  //When click on start, run a function
  $("#start").click(function(){
    //variable equal to callback function (timer) and 1000ms, or 1 sec
    var counter = setInterval(timer, 1000);
    //convert session count and break count so it can be shown as minutes and seconds
    sessionCount *= 60;
    breakCount *= 60;
    
    function timer() {
      //hide variables
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title2, #title3").hide();
      //show time type
      $("#timeType").show();
      //Output Timer: html
      $("#timeType").html("Timer:<br><br>");
      //timer function counts down by 1 second
      sessionCount-=1;
      //if sessionCount is equal to 0
      if(sessionCount===0){
        //stop interval from counting down
        clearInterval(counter);
        //player buzzer audio
        buzzer.play();
        //Variable to start breakTimer
        var startBreak = setInterval(breakTimer, 1000);
        //hide sessionNum so breakNum can be shown
        $("#sessionNum").hide();
      }
      
      //convert to minutes and seconds for session time
      if(sessionCount%60>=10){
       $("#sessionNum").html(Math.floor(sessionCount/60) + ":" + sessionCount%60);  
      } else {
        $("#sessionNum").html(Math.floor(sessionCount/60) + ":" + "0" + sessionCount%60);
      }
      
      function breakTimer(){
     //output html to timeType
      $("#timeType").html("Break Time:<br><br>");
      //unhide breakNum
      $("#breakNum").show();
      //show time type  
      $("#timeType").show();
      //breakCount down
      breakCount -= 1;
      //If break timer = 0
      if (breakCount===0){
        //stop counter from counting down
        //play buzzer audio
        //show and hide elements
        clearInterval(startBreak);
        buzzer.play();
        $("#reset").show();
        $("#breakNum").hide();
        $("#timeType").hide();
      }
        
        //convert to minutes and seconds for break time
        if(breakCount%60>=10){
       $("#breakNum").html(Math.floor(breakCount/60) + ":" + breakCount%60);  
      } else {
        $("#breakNum").html(Math.floor(breakCount/60) + ":" + "0" + breakCount%60);
      }
    }
    }
       
  });
  
  //When reset button is clicked
  $("#reset").click(function(){
    //reset session and break count
    sessionCount = 5;
    breakCount = 5;
    
    $("#sessionNum").html(sessionCount);
    $("#breakNum").html(breakCount);
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #sessionNum, #title2, #title3").show();
    $("#reset").hide();
  });
  
});