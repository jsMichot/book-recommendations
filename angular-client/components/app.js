angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((html) => {
    app.items = html;
  });
  app.getQ = (q) => {
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
      .then(books => {
        app.items = books;
      })
  };
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});