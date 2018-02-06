angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = books;
  });
  app.getQ = q => {
    itemsService.getQ(q, (xml) => {
      app.items = xml;
    })
  };
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});