angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/books')
    .then(function(books) {
      if(callback) {
        console.log('this is data: ' + books)
        callback(books);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});