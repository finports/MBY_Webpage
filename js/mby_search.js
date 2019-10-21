(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {
    $('.sch-ph').keypress(function(e) {
      if(e.which == 13) {
        location.href="searchResult.html";
      }
    });
  });

  $('.loginSignUp').click(function() {
    console.log("Success Click");
    alert("Comming Soon");
  });

})(jQuery); // End of use strict
