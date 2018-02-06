angular.module('book-recommendations')
  .service('goodreads', $http => {
    const service = this;
    this.callGoodreads = (query) => {
      return $http({
        method: 'GET',
        url: 'https://www.goodreads.com/search',
        params: {
          key: window.GOODREADS_API_KEY,
          q: query || 'history',
          part: 'best_book',
          maxResults: 5,
          type: 'Book'
        }
      })
      .then(books => {
        console.log(books);
      }, error => {
        console.log('Error: ' + error);
      })
    };
  })