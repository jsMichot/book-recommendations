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
    $http({
      url: '/books',
      method: "POST",
      params: {
        q: q
      }
    })
    .then((books) => {
      if (callback) {
        callback(books);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  };
});