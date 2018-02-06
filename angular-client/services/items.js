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
  this.getQ = (q, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.goodreads.com/search',
      qs: {
        q: q,
        key: 'Ya50zfsGd2qjCZfprdN5BQ',
      }
    })
    .then(function (xml) {
      if (callback) {
        callback(xml);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  };
});