angular.module('video-player')

  .component('app', {
    controller: goodreads => {
      const app = this;
      const books = [];
      goodreads.callGoodreads(query)
      .then(books => {
        console.log('app.js: ' + books);
      });
    },
    templateUrl: 'client/templates/app.html'
  })