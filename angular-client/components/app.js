angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((html) => {
    app.items = html;
  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});