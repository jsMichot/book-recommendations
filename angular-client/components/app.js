angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = books;
  });
  app.postQ = q => {
    itemsService.postQ(q, (books) => {
      app.items = books;
    })
    app.templateUrl = 'templates/app.html';
  };
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});