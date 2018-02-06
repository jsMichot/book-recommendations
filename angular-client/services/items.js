angular.module('app')
.service('itemsService', function($http) {
  const itemsService = this;
  itemsService.items = null;
  itemsService.getAll = function(callback) {
    $http.get('/books')
    .then(function(books) {
      itemsService.items = books.data;
      if(callback) {
        callback(books.data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  itemsService.postQ = (q, callback) => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "/books",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Postman-Token": "e0134111-8c4d-3124-0eb6-0e192384ae76"
      },
      "processData": false,
      "data": JSON.stringify({q: q})
    }
    $.ajax(settings).done(function (books) {
      itemsService.items = books;
      console.log(books);
      if (callback) {
        callback(books);
      }
    })
  };
});