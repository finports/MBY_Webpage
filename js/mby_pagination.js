(function($) {
  "use strict"; // Start of use strict

  var currentPage = 1;
  var rowsPerPage = 4;

  function setPaging(total) {
    var currentPage = total;
    var totalPages = total / rowsPerPage + (total % rowsPerPage === 0 ? 0 : 1);
    var totalRows = $('.news-wrapper').length;
    var pagesToShow = Math.ceil(totalRows/4);
    var startPage = parseInt((currentPage - 1) / pagesToShow) * pagesToShow + 1;
    var lastPage = totalPages;
  }

  var totalRows = $('.news-wrapper').length;
  var rowsPerPage = 4;
  var pageCount = 10;

  function paging(totalRows, rowsPerPage, pageCount, currentPage) {

    var totalPage = Math.ceil(totalRows/rowsPerPage);
    var pageGroup = Math.ceil(currentPage/pageCount);

    var lastPage = pageGroup * pageCount;
    if(lastPage > totalPage) {
      lastPage = totalPage;
    }

    var firstPage = lastPage - (pageCount - 1);

  }


})(jQuery); // End of use strict
