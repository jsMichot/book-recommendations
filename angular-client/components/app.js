angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = books;
    console.log('77777 ' + app.items);
  });
  app.postQ = q => {
    itemsService.postQ(q, (books) => {
      app.items = books;
      console.log('!!!!!! ' + app.items);
    })
    app.templateUrl = 'templates/app.html';
  };
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});