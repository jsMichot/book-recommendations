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
      $('.query').val('');
    })
  };
  app.makeWiseSelections = () => {
    console.log(1111)
    itemsService.getRan(books => {
      console.log('final ' + books);
      app.items = itemsService.items;
    })
  }
})
.component('app', {
  bindings: {input: '<'},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});