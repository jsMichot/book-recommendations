angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/books')
    .then(function(books) {
      if(callback) {
        callback(books);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  this.postQ = (q, callback) => {
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
      "data": {q: q}
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      if (callback) {
        callback(books);
      }
    })
    // $http({
    //   url: '/books',
    //   method: "POST",
    //   params: {
    //     q: q
    //   }
    // })
    
  };
});