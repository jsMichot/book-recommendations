angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = itemsService.items;
    console.log('77777 ' + app.items);
  });
  app.postQ = q => {
    itemsService.postQ(q, (books) => {
      app.items = itemsService.items;
      console.log('!!!!!! ' + app.items);
    })
    app.input = '';
    // app.templateUrl = 'templates/app.html';
  };
})
.component('app', {
  bindings: {input: '<'},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});