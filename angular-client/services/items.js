angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/books')
    .then(function(xml) {
      if(callback) {
        callback(xml);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});