angular.module('app')
.controller('AppCtrl', function(itemsService, $scope) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = books;
  });
  app.postQ = q => {
    itemsService.postQ(q, (books) => {
      console.log('postQ' + JSON.stringify(books));
      $scope.$apply(() => {
        app.items = books;
        $('.query').val('');
      })
    })
  };
  app.makeWiseSelections = () => {
    itemsService.getRan(books => {
      console.log('!!!' + books)
      app.items = books;
    })
  }
})
.component('app', {
  bindings: {input: '<'},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});