angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/books')
    .then(function({data}) {
      if(callback) {
        console.log('this is data: ' + data)
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});