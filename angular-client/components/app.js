angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = books;
  });
  app.postQ = q => {
    itemsService.getQ(q, (books) => {
      app.items = books;
    })
  };
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});