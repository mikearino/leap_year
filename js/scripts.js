var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0 )) {
    return true
    //if the year is divisble by 4 or 400 but not 100 then it is not a leap year which is spit back to the user
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
    $(".year").text(year);
    //Add contents of the year variable into a span with the class year
    if (!result) {
      $(".not").text("not
    //If the variable is false we set the text of the not span to not so the page reads not a leap year
    } else {
      $(".not").text("");
    }
    //If the variable is true instead empty the not span so it reads "is a leap year"
    $("#result").show();
    //Show entire result div so that the user can see their results
  });
});
