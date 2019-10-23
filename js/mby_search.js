(function($) {
  "use strict"; // Start of use strict

  $('.search-button').click(function() {
    alert("Comming Soon");
  });

  // Search Bar
  $('#input-value').on('keyup', function() {
    var word = $(this).val().toUpperCase();
    var wordS = $(this).val().toLowerCase();
    $(".article-box").hide();
    var result = $(".article-box:contains('" + word +"')");
    var resultS = $(".article-box:contains('" + wordS +"')");

    $(result).fadeIn(500);
    $(resultS).fadeIn(500);
  });

})(jQuery); // End of use strict
