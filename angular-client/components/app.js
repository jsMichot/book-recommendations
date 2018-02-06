angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((html) => {
    app.items = html;
  });
  app.getQ = (q) => {
    console.log(q);
  };
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});