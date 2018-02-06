angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/books')
    .then(function(xml) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "text/html");
      if(callback) {
        callback(doc);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});