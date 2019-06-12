var leapYear = function(year) {
  return false;
};//Writing simple back end function to see if program can return false



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
