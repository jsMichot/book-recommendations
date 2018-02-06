angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http({
      method: 'GET',
      url: 'https://www.goodreads.com/search',
      params: {
        key: window.GOODREADS_API_KEY,
        q: 'history',
        part: 'best_book',
        maxResults: 5,
        type: 'Book'
      }
    })
    .then(books => {
      console.log(books);
    })
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});