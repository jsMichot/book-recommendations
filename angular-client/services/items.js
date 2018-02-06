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
      params: {
        key: 'Ya50zfsGd2qjCZfprdN5BQ',
        q: q,
        part: 'best_book',
        maxResults: 5,
        type: 'Book'
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