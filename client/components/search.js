angular.module('book-recommendations')
  .component('search', {
    bindings: {
      getBooks: '<'
    },
    templateUrl: 'client/templates/search.html'
  })