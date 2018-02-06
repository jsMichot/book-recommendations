angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/books')
    .then(function(xml) {
      window.books = xml;
      if(callback) {
        callback(xml);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  this.getQ = (q, callback) => {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://www.goodreads.com/search/index.xml?key=Ya50zfsGd2qjCZfprdN5BQ&q=romance`,
      "method": "GET"
    }
    $.ajax(settings).done(function (xml) {
      callback(xml);
    });
  };
});