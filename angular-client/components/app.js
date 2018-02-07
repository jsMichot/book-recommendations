angular.module('app')
.controller('AppCtrl', function(itemsService) {
  const app = this;
  itemsService.getAll((books) => {
    app.items = itemsService.items;
  });
  app.postQ = q => {
    itemsService.postQ(q, (books) => {
      app.items = itemsService.items;
      $('.query').val('processing your request');
    })
      .then(() => { $('.query').val(''); });
  };
  app.makeWiseSelections = () => {
    itemsService.getRan(books => {
      app.items = itemsService.items;
    })
  }
})
.component('app', {
  bindings: {input: '<'},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});