var leapYear = function(year) {
  if (year % 100 === 0) {
    return false;
    //if the year is divisble by 100 then it is not a leap year which is spit back to the user
  } else if (year % 4 === 0) {
    return true;
    //if the year is divisible by 4 then it is a leap year and returns true to the user
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    //when you hit submit this activastes Jquery for the leap year form
    var year = parseInt($("input#year").val());
    console.log(year)
    //this variable year takes the input for input$years value with .val and parses it to make sure that it is an integer
    var result = leapYear(year);
    //This will call leapYear function, passing in the variable year as an
    console.log(result)
    $("#result").text(result);
    //This displays the returned boolean value
  });
});
