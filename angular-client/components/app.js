angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((xml) => {
    app.items = xml;
  });
  itemsService.getQ(q, (xml) => {
    app.items = xml;
  })
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});